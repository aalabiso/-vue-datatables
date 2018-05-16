<template>
    <li>
        <a class="button is-small" :class="['pagination-link', { 'is-current': page.current_page === pageNumber }]" @click="$emit('page-change-page', pageNumber)">
            {{ pageNumber }}
        </a>
    </li>
</template>

<script>
    export default {
        props: ['page', 'pageNumber'],
        methods: {}
    }
</script>