<script>
	import Todo from "../components/Todo.svelte";
</script>

<div class="wrapper">
    <Todo/>
</div>

<style>
    :global(body){
        margin: 0;
    }
    .wrapper{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
</style>