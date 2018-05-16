<template>

    <span>
        <a :href="`mailto:${item[column.key]}`">
            {{ item[column.key] }}
            <icon class="has-text-grey-light" name="regular/envelope" style="margin-left: 3px; margin-bottom: -3px;"></icon>
        </a>
    </span>
</template>
<script>
    import Icon from "vue-awesome";
    export default {
        components: {
            Icon
        },
        props: [ 'item', 'column', 'bulk']
    }
</script>