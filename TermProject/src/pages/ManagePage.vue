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
        <template v-slot:body-cell-actions="props">
          <q-td :props="props">
            <q-btn icon="home" ></q-btn>
          </q-td>
          <q-td :props="props">
            <q-btn icon="delete" ></q-btn>
          </q-td>
        </template>
      </q-table>
    </div>
  </q-page>
</template>

<script>
import { date } from "quasar";

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

const rows = [
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
];

export default {
  setup() {
    return {
      columns,
      rows,
    };
  },
};
</script>
