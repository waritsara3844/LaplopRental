<template>
<q-page padding q-pa-md>
  <div>
    <center><h3 class="text-grey-6">Summary</h3></center>
  </div>
  <q-card class="my-card q-my-md" style=" background: #DBCFC3
">
      <q-card-section style="color:black" >
       Total Product
       <div>View</div>
       <div class="vertical-middle" align="right">11</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card q-my-md" style=" background: #D3E3D6
">
      <q-card-section style="color:black">
        New Booking
        <div>View</div>
        <div class="vertical-middle" align="right">1</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card q-my-md" style=" background: #EFC4B9
">
      <q-card-section style="color:black">
        Approved Booking
        <div>View</div>
        <div class="vertical-middle" align="right">2</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card q-my-md"  style=" background: #FDBC96">
      <q-card-section style="color:black">
        Unapproved Booking
        <div>View</div>
        <div class="vertical-middle" align="right">1</div>
      </q-card-section>
    </q-card>
    <q-card class="my-card q-my-md" style=" background: #DAC2CF" >
      <q-card-section style="color:black">
        Total booking
        <div>View</div>
        <div class="vertical-middle" align="right">4</div>
      </q-card-section>
    </q-card>
     <q-card class="my-card q-my-md" style=" background: #E0C0BC">
      <q-card-section
      style="color:black">
        Total brand
        <div>View</div>
        <div class="vertical-middle" align="right">10</div>
      </q-card-section>
    </q-card>
</q-page>
</template>

<script>


export default {
  name: "allSummary",
  setup () {
    return {

    }
  }
}
</script>

<style>

</style>
