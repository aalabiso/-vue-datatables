<template>
    <span>{{ item[column.key] | datetime }}</span>
</template>

<script>
    export default {
        props: ['item', 'column']
    }
</script>
