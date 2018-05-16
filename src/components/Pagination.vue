<template>

    <nav class="pagination is-centered" role="navigation" aria-label="pagination" style="margin: 5px;">
        <a v-if="size > 1" class="pagination-previous button is-small" :disabled="pages.current_page === 1" @click="changePage(previous)">&larr; Previous</a>
        <a v-if="size > 1" class="pagination-next button is-small" :disabled="pages.current_page === size" @click="changePage(next)">Next &rarr;</a>
        <ul class="pagination-list">
            <component v-for="(element, index) in elements" :key="index" :is="element.type" :pageNumber="element.page" :page="pages" v-on:page-change-page="changePage"  />
        </ul>
    </nav>

</template>
<style>

</style>
<script>

    import Page from './Pagination/Page.vue';
    import Ellipses from './Pagination/Ellipses';
    import LengthSelector from './LengthSelector';

    export default {
        props: {
            pages: {
                type: Object,
                default: function () {
                    return {
                        current_page: 4,
                        per_page: 10,
                        last_page:10,
                        from:41,
                        to:50,
                        total:100,
                    };
                },
            }
        },
        mixins: [],
        components: {
            Page,
            Ellipses,
            LengthSelector
        },
        data() {
            return {
                isLoading: false,
                elements: [],
                step: 1,
            }
        },
        computed: {
            size() {
                return Math.ceil(this.pages.total / this.pages.per_page)
            },
            current() {
                return this.pages.current_page;
            },
            next() {
              return this.current + 1;
            },
            previous() {
              return this.current - 1;
            },
            length() {
                return this.pages.length;
            }
        },

        mounted() {
            //console.log( this.pages );
            this.paginate();
        },
        methods: {

            changePage( page ) {
                this.$emit('pagination-change-page', page);
            },
            add (start, finish) {
                for (var i = start; i <= finish; i++) {
                    this.elements.push(
                        { type: 'page', page: i }
                    )
                }
            },

            first () {
                // Add first page with separator
                this.elements.push(
                    { type: 'page', page: 1 },
                    { type: 'ellipses' }
                )
            },
            last () {
                // Add last page with separator
                this.elements.push(
                    { type: 'ellipses' },
                    { type: 'page', page: this.size }
                );
            },


            paginate () {
                this.elements = []

                if( this.current > this.size )
                {
                    this.current = 1;
                }
                if (this.size < this.step * 2 + 6) {
                    // No ellipses
                    this.add(1, this.size);
                }
                else if (this.current < this.step * 2 + 1) {
                    //Ellipses at end
                    this.add(1, this.step * 2 + 1);
                    this.last();
                }
                else if (this.current > this.size - this.step * 2) {
                    // Ellipses at start
                    this.first();
                    this.add(this.size - this.step * 2 - 1, this.size);
                }
                else {
                    //Ellipses at start and end
                    this.first();
                    this.add(this.current - this.step, this.current + this.step);
                    this.last();
                }
            },
        },
        watch: {
            pages() {
                this.paginate();
            }
        },

    }

</script>
