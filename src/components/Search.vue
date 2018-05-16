<template>
    <div>

        <div class="field">
            <div class="control is-small" :class="{'is-loading': searching}">
                <input class="input is-small" type="text" :placeholder="` Search ${itemType}`" v-model="term" @change="search(term)" @click="searching=false">
            </div>
        </div>

    </div>
</template>

<script>

    export default {

        components: {},
        props: {
            isSearching: {
                default: false,
            },
            itemType: {
                type: String,
                default: 'Items'
            },
        },
        data() {
            return {
                searching: false,
                term: null,
            }
        },
        methods: {
            search( term) {
                if( term.length > 3 )
                {
                    this.searching = true;
                    console.log( `Searching for ${term}`);
                    this.$emit('search', term);
                }
            }
        },
    }


</script>

