<template>
    <div class="todo-tab">
        <div
            v-for="item in list"
            :key="item.value"
            @click="item.click"
            class="tab-item"
            :class="{ active: todo.state.type === item.value }"
        >
            {{ item.name }}
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ETodoType, useTodo } from '../service';

export default defineComponent({
    setup() {
        const todo = useTodo();

        const list = [
            {
                name: '全部',
                value: ETodoType.ALL
            },
            {
                name: '已完成',
                value: ETodoType.DONE
            },
            {
                name: '未完成',
                value: ETodoType.UNDONE
            }
        ].map(item => {
            return {
                ...item,
                click() {
                    todo.state.type = item.value;
                }
            };
        });

        return { list, todo };
    }
});
</script>

<style lang="scss" scoped>
.todo-tab {
    display: flex;
    border-bottom: 1px dashed #2ad;
    text-align: center;

    .tab-item {
        flex: 1;
        padding: 8px;
        cursor: pointer;

        & + .tab-item {
            border-left: 1px dashed #2ad;
        }

        &.active {
            color: #2ad;
            font-weight: bold;
        }
    }
}
</style>
