<template>

    <table v-if="items && items.length > 0" class="table" :class="tableClass">
        <thead :class="headClass">
            <tr :class="headClass">
                <th v-for="column in columns" :class="column.class" :key="column.key" @click="updateSort(column.key)" style="cursor:pointer;">

                    <span v-if="column.sortable !== false && column.key !== null">
                        {{column.label}}
                    </span>
                    <span v-else>
                        {{column.label}}
                    </span>

                    <span v-if="column.sortable !== false && column.key !== null && column.key === sortBy" class="has-text-weight-light has-text-grey">
                        <icon v-if="sortOrder === 'asc'" :name="icons.sortAsc"></icon>
                        <icon v-else :name="icons.sortDesc"></icon>
                    </span>

                </th>
            </tr>
        </thead>


        <tbody :class="bodyClass">
            <tr v-for="item in items" :key="item.email">
                <td v-for="column in columns" :key="column.key" :class="column.class">
                    <div v-if="column.component">
                        <component :is="column.component" :item="item" :column="column" :bulk="bulk"></component>
                    </div>
                    <div v-else>
                        {{ item[column.key ]}}
                    </div>
                </td>
            </tr>
        </tbody>
    </table>

    <div v-else-if="isLoading">

        Loading {{ itemType }}...

        <div>
            <div class="loading-dot is-centered"></div>
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
            <div class="loading-dot"></div>
        </div>
    </div>
    <div v-else>
        Sorry no {{ itemType }} were found
    </div>


</template>

<style>
    .fa-icon {
        margin-bottom: -2px;
        width: auto;
        height: 1em; /* or any other relative font sizes */

        /* You would have to include the following two lines to make this work in Safari */
        max-width: 100%;
        max-height: 100%;
    }

    .loading-dot {
        float: left;
        width: 8px;
        height: 8px;
        margin: 0 4px;
        background: #666;

        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;

        opacity: 0;

        -webkit-box-shadow: 0 0 1px black;
        -moz-box-shadow: 0 0 1px black;
        -ms-box-shadow: 0 0 1px black;
        -o-box-shadow: 0 0 1px black;
        box-shadow: 0 0 1px black;

        -webkit-animation: loadingFade 1s infinite;
        -moz-animation: loadingFade 1s infinite;
        animation: loadingFade 1s infinite;
    }

    .loading-dot:nth-child(1) {
        -webkit-animation-delay: 0s;
        -moz-animation-delay: 0s;
        animation-delay: 0s;
    }

    .loading-dot:nth-child(2) {
        -webkit-animation-delay: 0.1s;
        -moz-animation-delay: 0.1s;
        animation-delay: 0.1s;
    }

    .loading-dot:nth-child(3) {
        -webkit-animation-delay: 0.2s;
        -moz-animation-delay: 0.2s;
        animation-delay: 0.2s;
    }

    .loading-dot:nth-child(4) {
        -webkit-animation-delay: 0.3s;
        -moz-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }

    @-webkit-keyframes loadingFade {
        0% { opacity: 0; }
        50% { opacity: 0.8; }
        100% { opacity: 0; }
    }

    @-moz-keyframes loadingFade {
        0% { opacity: 0; }
        50% { opacity: 0.8; }
        100% { opacity: 0; }
    }

    @keyframes loadingFade {
        0% { opacity: 0; }
        50% { opacity: 0.8; }
        100% { opacity: 0; }
    }
</style>

<script>

    import Icon from 'vue-awesome'
    import Datetime from '../components/Datatable/Datetime';
    import Phone from '../components/Datatable/Phone';
    import Email from '../components/Datatable/Email';

    export default {

        components: {
            Icon,
            Datetime,
            Phone,
            Email
        },
        filters: require('../filters'),
        props: {
            isLoading: {
                default: false,
            },
            columns: {},
            items: {},
            itemType: {
                type: String,
                default: 'items'
            },
            icons: {
                type: Object,
                default: function (){
                    return {
                        sortAsc: 'sort-alpha-up',
                        sortDesc: 'sort-alpha-down',
                    };
                },
            },
            tableClass: {
                type: String,
                default: 'is-fullwidth is-striped is-hoverable'
            },
            headClass: {
                type: String,
                default: '',
            },
            bodyClass: {
                type: String,
                default: '',
            }
        },
        computed: {},
        data() {
            return {
                sortBy: null,
                sortOrder: null,
                bulk: {
                    checked: []
                },
            }
        },

        methods: {
            updateSort( sortBy ){
                if( this.sortBy === sortBy )
                {
                    this.sortOrder = this.sortOrder === 'asc' ?  'desc' : 'asc';
                } else {
                    this.sortBy = sortBy;
                }
            },
        },
        watch: {
        }

    }
</script>
