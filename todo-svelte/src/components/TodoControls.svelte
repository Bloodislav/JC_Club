<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let InputText = '';

    function onAdd(){
        if (InputText.length){
            dispatch('add', {text:InputText});
        }
        InputText = '';
    }

    function EnterClicked(event){
        if (event.keyCode == 13) {
            onAdd()
        }
    }
</script>

<div class="todo__controls">
    <!-- bind:value={InputText} - экмпорт значния в переменую -->
    <input class="todo__controls-input" type="text" bind:value={InputText} on:keypress={EnterClicked}>
    <button class="todo__controls-btn" on:click={onAdd}>Добавить</button>
</div>

<style>
    .todo__controls{
        display: grid;
        grid-template-columns: 70% 30%;

    }
    .todo__controls-input{
        border: none;
        /* 1 num - up & down, 2 num - left & right */
        padding: 20px 10px;
        border-radius: 10px 0 0 10px;
    }
    .todo__controls-btn{
        border: none;
        padding: 10px;
        border-radius: 0 10px 10px 0;
        background-color: #FBCC28;
    }
    .todo__controls-btn:hover{
        border: none;
        padding: 10px;
        border-radius: 0 10px 10px 0;
        background-color: rgb(240, 194, 29);
    }
</style>