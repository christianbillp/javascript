<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in employees" :key="employee.id">
        <!-- <tr v-for="item in desserts" :key="item.name"> -->
          <!-- <td>{{ item.name }}</td>
          <td>{{ item.calories }}</td> -->
          <td>{{ employee.name }}</td>
          <td>{{ employee.email }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>


<script>
// import axios from 'axios'
export default {
    name: 'DataViewer',
    props: {
        employees: Array
    },
 
    // mounted() {
        // this.getData();
    // },
    // methods: {
    //     getData() {
    //         axios.get('/getdata').then(response => {
    //             this.data = response.data
    //             console.log("response", response);
    //         })
    //     }
    // }
}
</script>