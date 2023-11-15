<script>
    export let id = 0;
    export let text = 'Text';
    export let status = false;

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    function onChange(){
        dispatch('change', { id })
    }

    function onDel() {
        dispatch('remove', { id })
    }
</script>

<!-- class:todo-item_done={status} - включение класса в зависемости от парметра -->
<div class="todo-item" class:todo-item_done={status}>
    <input type="checkbox" checked={status} on:change={onChange}>
    <span>{text}</span>
    <button class="todo-item__btn"  on:click={onDel}>Удалить</button>
</div>

<style>
    .todo-item{
        background-color: #FFEBEB;
        padding: 20px;
        border-radius: 10px;
        display: grid;
        grid-template-columns: auto 1fr auto;
        gap: 30px;
        align-items: center;
    }
    .todo-item__btn{
        background-color: red;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px;
    }
    .todo-item_done{
        background-color: #EBFFED;
    }
</style>