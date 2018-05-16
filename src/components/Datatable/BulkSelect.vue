<template>

    <input type="checkbox" v-model="bulk.checked" ref="input" :value="item.id" style="margin-right: 10px">

</template>

<script>
    export default {
        props: [ 'item', 'bulk'],
    }
</script>