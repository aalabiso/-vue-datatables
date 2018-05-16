export default {
    methods: {
        changePage(page) {
            this.isLoading = true;
            this.items = null;
            console.log('Datatable Mixin is changing the page to ' + page);
        }
    },
    data(){
        return{
            isLoading: false,

            columns: [
                {
                    label:'Number',
                    key:'number',
                    component: 'phone',
                },
                {
                    label: 'Name',
                    key: 'name',
                },
                {
                    label:'Email',
                    key: 'email',
                    component: 'email'
                },
                {
                    label:'Created At',
                    key:'created_at',
                    component: 'datetime',

                },
                {
                    label: null,
                    key: null,
                    class: 'is-actions',
                    sortable: false
                }
            ],
            items: [
                {
                    id: 1,
                    number: '8885551212',
                    name: 'Timmy Toolbox',
                    email: 'timmy@toobox.com',
                    created_at: '2018-01-15 22:57:49',
                },
                {
                    id: 2,
                    number: '8885551234',
                    name: 'Johnny Johnson',
                    email: 'johnny@johnson.com',
                    created_at: '2018-02-22 02:35:07',
                },
                {
                    id: 3,
                    number: '8885554321',
                    name: 'Marybeth Merrison',
                    email: 'marymary@mary.com',
                    created_at: '2017-02-03 17:22:01',
                },
                {
                    id: 4,
                    number: '8885559876',
                    name: 'Jimmy Jimmerson',
                    email: 'jimmy@james.com',
                    created_at: '2018-03-09 09:12:32',
                },
            ]
        }
    }
}