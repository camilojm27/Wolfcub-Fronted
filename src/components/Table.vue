<template>
  <div class="page">
    <h1>{{title}}</h1>
    <table class="layout display responsive-table">
      <thead>
        <th v-for="t in col_titles" v-bind:key="t">
          {{t}}
        </th>
      </thead>
      <tbody>

      <tr v-for="user in users" :key="user.document_id">
        <td class="organisationname">{{user.document_id}}</td>
        <td class="organisationname">{{user.first_name}}</td>
        <td class="organisationname">{{user.last_name}}</td>
        <td class="organisationname">{{user.phone}}</td>
        <td class="organisationnumber">{{user.email}}</td>
        <td class="actions">
          <button>Edit</button>
          <button v-on:click="btnDelete(user.document_id)">Remove</button>
        </td>
      </tr>

      </tbody>
    </table>
  </div>


</template>

<script>
export default {
  name: "Table",
  props: {users: Array, title: String, col_titles: Array},
  methods: {
    btnDelete: async function (id){
      this.$swal.fire({
        title: "are you sure you want to delete record "+ id,
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Borrar',
      }).then((result) => {
        if (result.value){
          //boorar
          this.$swal.fire('eliminado')
        }
      })
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    btnEdit: async function (){},
  }
}
</script>

<style scoped>
body{
  padding: 1em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAQElEQVQIW2P89OvDfwYo+PHjJ4zJwMHBzsAIk0SXAKkCS2KTAEu++vQSbizIKGQAl0SXAJkGlsQmAbcT2Shk+wH0sCzAEOZW1AAAAABJRU5ErkJggg==);
}
a{
  color: #739931;
}
.page{
  max-width: 60em;
  margin: 0 auto;
}
table th,
table td{
  text-align: left;
}
table.layout{
  width: 100%;
  border-collapse: collapse;
}
table.display{
  margin: 1em 0;
}
table.display th,
table.display td{
  border: 1px solid #B3BFAA;
  padding: .5em 1em;
}

table.display th{ background: #D5E0CC; }
table.display td{ background: #fff; }

table.responsive-table{
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 30em){
  table.responsive-table{
    box-shadow: none;
  }
  table.responsive-table thead{
    display: none;
  }
  table.display th,
  table.display td{
    padding: .5em;
  }

  table.responsive-table td:nth-child(1):before{
    content: 'Number';
  }
  table.responsive-table td:nth-child(2):before{
    content: 'Name';
  }
  table.responsive-table td:nth-child(1),
  table.responsive-table td:nth-child(2){
    padding-left: 25%;
  }
  table.responsive-table td:nth-child(1):before,
  table.responsive-table td:nth-child(2):before{
    position: absolute;
    left: .5em;
    font-weight: bold;
  }

  table.responsive-table tr,
  table.responsive-table td{
    display: block;
  }
  table.responsive-table tr{
    position: relative;
    margin-bottom: 1em;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.2);
  }
  table.responsive-table td{
    border-top: none;
  }
  table.responsive-table td.organisationnumber{
    background: #D5E0CC;
    border-top: 1px solid #B3BFAA;
  }
  table.responsive-table td.actions{
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    background: none;
  }
}
</style>
