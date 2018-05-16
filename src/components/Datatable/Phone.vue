<template>

    <div>
        <bulk-select :bulk="bulk" :item="item"></bulk-select>
        <span>{{ item[column.key] | phone }}</span>
    </div>

</template>

<script>
    import BulkSelect from './BulkSelect';

    export default {
        components: {
          BulkSelect
        },
        props: [ 'item', 'column', 'bulk'],
    }
</script>