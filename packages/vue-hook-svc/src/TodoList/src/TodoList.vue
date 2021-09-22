<template>
    <div class="todo-list">
        <TodoAdd />
        <TodoTab />
        <div class="list">
            <TodoItem v-for="(item, index) in list" :key="index" :item="item" />
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { ETodoType, useTodo } from '../service';
import TodoAdd from './TodoAdd.vue';
import TodoTab from './TodoTab.vue';
import TodoItem from './TodoItem.vue';

export default defineComponent({
    components: {
        TodoAdd,
        TodoTab,
        TodoItem
    },
    setup() {
        // 在业务最顶层初始化一下
        const todo = useTodo();

        // todo 中的数据可以给 computed 用
        const list = computed(() => {
            return todo.state.list.filter(n => todo.state.type === ETodoType.ALL || todo.state.type === n.type);
        });

        return {
            list
        };
    }
});
</script>

<style lang="scss" scoped>
.todo-list {
    // border: 1px solid #2ad;
    margin: 0 auto;
    width: 500px;
    box-shadow: 0 0 4px #ddd;
    padding: 20px;

    .todo-add {
        margin-bottom: 10px;
    }
}
</style>
