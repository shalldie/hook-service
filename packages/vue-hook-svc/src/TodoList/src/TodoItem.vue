<template>
    <div class="todo-item" @click="state.toggleDone" :class="{ done: state.done }">
        <div class="content">{{ item.name }}</div>
        <!-- 可以直接在 template 里面用，
        不过鉴于目前这部分类型检查不够友好，最好还是放在 script 里面 -->
        <div @click="todo.removeTodo(item)" class="ctl">删除</div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, reactive } from 'vue';
import { ETodoType, TTodoItem, useTodo } from '../service';

export default defineComponent({
    props: {
        item: {
            type: Object as PropType<TTodoItem>,
            required: true
        }
    },
    setup(props) {
        const todo = useTodo();

        const state = reactive({
            /** 是否 “已完成” */
            done: computed(() => props.item.type === ETodoType.DONE),
            /** toggle 状态 */
            toggleDone() {
                const mapAction = {
                    [ETodoType.DONE]: ETodoType.UNDONE,
                    [ETodoType.UNDONE]: ETodoType.DONE
                };
                // 可以在任何地方修改 service.state
                props.item.type = mapAction[props.item.type] || ETodoType.DONE;
            }
        });

        return {
            todo,
            state
        };
    }
});
</script>

<style lang="scss" scoped>
.todo-item {
    display: flex;
    border-bottom: 1px dashed #2ad;
    padding: 6px 0;

    .content {
        flex: 1;
        cursor: pointer;
    }

    &.done .content {
        text-decoration: line-through;
        color: red;
    }

    .ctl {
        width: 50px;
        cursor: pointer;
        border-left: 1px dashed #2ad;
        text-align: center;
    }
}
</style>
