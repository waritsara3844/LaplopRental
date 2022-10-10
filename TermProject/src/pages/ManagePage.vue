<template>
  <q-page>
    <div class="text-h4 q-ma-md q-pa-md" align="center">Management</div>
    <div class="q-pa-md">
      <q-table
        title="Manage Request"
        :rows="rows"
        :columns="columns"
        row-key="name"
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="name" :props="props">
            {{ props.row.name }}
          </q-td>
          <q-td key="tel" :props="props">
            {{ props.row.tel }}
          </q-td>
          <q-td key="date" :props="props">
            {{ props.row.date }}
          </q-td>
          <q-td key="accept" :props="props">
            <q-btn icon="check" @click="this.acceptRequest(props.row)"/>
          </q-td>
          <q-td key="decline" :props="props">
            <q-btn icon="delete" @click="this.removeReq(props.row.name)"/>
          </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { date } from "quasar";
import { useLoginUserStore} from '../stores/database';

const columns = [
  {
    name: "name",
    required: true,
    label: "Username",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "tel",
    align: "center",
    label: "Telephone",
    field: "tel",
    sortable: true,
  },
  {
    name: "date",
    align: "center",
    label: "Date",
    field: "date",
    sortable: true,
  },
  { name: "accept", align: "center", label: "Accept", field: "icon_accept" },
  { name: "decline", align: "center", label: "Decline", field: "icon_decline" },
];


export default {
  name:"ManagePage",
  setup() {
    return {
      columns,
    };
  },
  methods:{
    removeReq(name){
      this.rows = this.rows.filter((item) => item.name != name);
    },
    acceptRequest(row){
      this.data.addAccRequest(row);
      this.removeReq(row.name);
    }
  },
  data(){
    return{
      data: useLoginUserStore(),

      rows: [
  {
    name: "Warit",
    tel: "0987452729",
    date: "09/30/2022 to 10/30/2022",
  },
  {
    name: "Puntira",
    tel: "0966444799",
    date: "09/28/2022 to 10/15/2022",
  },
  {
    name: "Motana",
    tel: "0980154177",
    date: "10/7/2022 to 11/30/2022",
  },
]
    }
  }
};
</script>
