<template>
    <div class="todo-add">
        <input v-model="model" type="text" />
        <button @click="addTodo">添加</button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useTodo } from '../service';

export default defineComponent({
    setup() {
        const todo = useTodo();
        const model = ref('');

        function addTodo() {
            if (!model.value.length) {
                return;
            }
            todo.addTodo(model.value);
            model.value = '';
        }

        return {
            model,
            addTodo
        };
    }
});
</script>

<style lang="scss" scoped>
.todo-add {
    display: flex;

    input {
        flex: 1;
        transition: 0.3s;
        padding: 0 6px;
        border-radius: 3px;
        border: 1px solid #ddd;
        height: 30px;
        outline: none;
        box-sizing: border-box;
    }

    button {
        color: #fff;
        background-color: #5cb85c;
        border-color: #4cae4c;
        padding: 6px 12px;
        border-radius: 3px;
        margin-left: 20px;
        cursor: pointer;
        transition: 0.3s;
        font-weight: 700;
        border: 1px solid #ddd;
        height: 30px;
        line-height: 1;
        outline: none;
        box-sizing: border-box;
        vertical-align: top;
    }
}
</style>
