<script>
	import TodoControls from "./TodoControls.svelte";
	import TodoItem from "./TodoItem.svelte";

    let items = [
        {
            id: 1,
            text: 'buy car',
            status: true
        },
        {
            id: 2,
            text: 'wash dish',
            status: false
        }
    ];
    let lastId = 3;

    function onAdd(eventic){
        const item = {
            id: lastId++,
            text: eventic.detail.text,
            status: false
        }
        items.push(item);
        items = items;
    }

    function onChange(eventic){
        const item = items.find((i)=> i.id === eventic.detail.id);
        item.status = !item.status
        items = items;
    }

    function onRemove(eventic) {
        const itemIndex = items.findIndex((i)=> i.id === eventic.detail.id);
        items.splice(itemIndex, 1);
        items = items;
        console.log(items);
    }
</script>

<div class="todo">
    <TodoControls on:add={onAdd}/>
    <div class="todo__list">
        <!-- props - передача значения от родителя к ребенку -->
        {#each items as item}
        <TodoItem id={item.id} text={item.text} status={item.status} 
            on:change={onChange} 
            on:remove={onRemove}
        />
        {/each}
    </div>
</div>

<style>
    .todo{
        background-color: #e6e6e6;
        padding: 20px;
        height: 80%;
        width: 600px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        /* Благодаря  display: flex и flex-direction: column; можем делать отступы*/
        gap: 20px;
    }
    .todo__list{
        background-color: white;
        /* Вырасти на все поле */
        flex-grow: 1;
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow: auto;
    }
</style>