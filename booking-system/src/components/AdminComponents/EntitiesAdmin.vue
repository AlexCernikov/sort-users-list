<template>
  <div class="entities-container">
    <div class="top-dashboard">
      <button class='add-entry-button'
      :class="[ !showAddEntry ? '' : 'red' ]" @click="changeShowAddEntry">
        {{ showAddEntry ? 'Close' : 'Add Entry' }}</button>

      <div class="form-container">
        <form v-if="this.showAddEntry" @submit.prevent="addEntry">
          <label for="name">
            <input type="text" id="name" name="name"
            v-model="this.newObject.name" placeholder="Enter Name">
          </label>
          <label for="description">
            <input type="text"
             id="description" name="description"
             v-model="this.newObject.description" placeholder="Enter Description">
          </label>
          <label for="enabled">
            <select v-model="this.newObject.enabled" name="enabled" id="enabled">
              <option value="" disabled selected>Select Enabled Status</option>
              <option value=true>True</option>
              <option value=false >False</option>
            </select>
          </label>
          <label for="type">
            <select v-model="this.newObject.type" name="type" id="type">
              <option value="" disabled selected>Select Type</option>
              <option value=ROOM>Room</option>
              <option value=TABLE>Table</option>
              <option value=DEVICE>Device</option>
            </select>
          </label>
          <button type="submit">Add Entry</button>
        </form>
      </div>
      <div class="table-head">
        <div>INDEX</div>
        <div>ENTITY NAME</div>
        <div>TYPE</div>
        <div>DESCRIPTION</div>
        <div >ENABLED STATUS </div>
        <div></div>
      </div>
    </div>
    <div class='list' v-for="entity in Entities" :key="entity.id">
      <div class="list-item">
        <div class="entity-id">{{ entity.id }}</div>
        <div>{{ entity.name }}</div>
        <div>{{ entity.type }}</div>
        <div>{{ entity.description }}</div>
        <div class='enabled-status'
        :class="[ (entity.enabled) ? 'green' : 'red' ]">{{ entity.enabled }}</div>
        <div class="actions">
            <span class="material-icons icon-delete" @click="deleteId(entity.id)"
            @keyup="deleteId(entity.id)">
              close
            </span>
            <span class="material-icons" @click="editId(entity.id)" @keyup="editID(entity.id)">
              edit
            </span>

        </div>
      </div>

      <div class='item-form' v-if="this.shown === entity.id ? true : false">
        <div class="form-container">
          <form @submit.prevent="updateId(entity.id)">
            <label for="name">
              <input type="text" id="name" name="name"
              v-model="this.updateObject.name" placeholder="Enter Name">
            </label>
            <label for="description">
              <input type="text" id="description" name="description"
              v-model="this.updateObject.description" placeholder="Enter Description">
            </label>
            <label for="enabled">
              <select v-model="this.updateObject.enabled" name="enabled" id="enabled">
                <option value="" disabled selected>Select enabled status</option>
                <option value=true>True</option>
                <option value=false>False</option>
              </select>
            </label>
            <label for="type">
              <select v-model="this.updateObject.type" name="type" id="type">
                <option value="" disabled selected>Select Type</option>
                <option value=ROOM>Room</option>
                <option value=TABLE>Table</option>
                <option value=DEVICE>Device</option>
              </select>
            </label>
            <button type="submit">Submit changes</button>
          </form>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EntitiesAdmin',
  data() {
    return {
      token: '',
      Entities: [],
      shown: -1,
      updateObject: {
        name: '',
        description: '',
        jsonOptions: '{}',
        type: '',
        enabled: '',
      },
      newObject: {
        name: '',
        description: '',
        jsonOptions: '{}',
        type: '',
        enabled: '',
      },
      showAddEntry: false,
    };
  },
  created() {
    axios.post('http://135.181.104.18:8081/user/authenticate', {
      email: 'anonymous@isd.com',
      password: 'qwe123',
    })
      .then((response) => {
        if (response.data.token) {
          this.token = response.data.token;
          localStorage.setItem('token', this.token);
          console.log(this.token);
        }
      });
    axios.get('http://135.181.104.18:8081/reservationEntities', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => {
        if (response.data) {
          this.Entities = response.data;
          console.log(this.Entities);
        }
      });
  },
  methods: {
    render() {
      axios.get('http://135.181.104.18:8081/reservationEntities', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
        .then((response) => {
          if (response.data) {
            this.Entities = response.data;
          }
        });
    },
    // deleteId(id) {
    //
    // },
    deleteId(id) {
      if (window.confirm(`Are you sure you want to delete entry with ID: ${id}`)) {
        axios.delete(`http://135.181.104.18:8081/reservationEntities/delete/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then(() => {
            this.render();
          });
      }
    },
    clearUpdateObject() {
      this.updateObject.name = '';
      this.updateObject.description = '';
      this.updateObject.jsonOptions = '{}';
      this.updateObject.enabled = '';
      this.updateObject.type = '';
    },
    editId(id) {
      if (this.shown === id) {
        this.shown = -1;
        this.clearUpdateObject();
        return;
      }
      this.shown = id;
    },

    updateId(id) {
      if (window.confirm(`Are you sure you want to update entry with ID: ${id}`)) {
        axios({
          method: 'PUT',
          url: 'http://135.181.104.18:8081/reservationEntities/update',
          data: {
            id,
            name: this.updateObject.name,
            description: this.updateObject.description,
            jsonOptions: this.updateObject.jsonOptions,
            type: this.updateObject.type,
            enabled: this.updateObject.enabled,
          },
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then((response) => {
            this.render();
            this.clearUpdateObject();
          });
      }
    },
    changeShowAddEntry() {
      if (this.showAddEntry === true) {
        this.newObject.name = '';
        this.newObject.description = '';
        this.newObject.jsonOptions = {};
        this.newObject.type = '';
        this.newObject.enabled = '';
      }
      this.showAddEntry = !this.showAddEntry;
    },
    addEntry() {
      if (this.newObject.name && this.newObject.description
      && this.newObject.type && (this.newObject.enabled !== undefined)) {
        axios({
          method: 'POST',
          url: 'http://135.181.104.18:8081/reservationEntities/create',
          data: {
            name: this.newObject.name,
            description: this.newObject.description,
            jsonOptions: this.newObject.jsonOptions,
            type: this.newObject.type,
            enabled: this.newObject.enabled,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
          .then((response) => {
            this.newUser = response;
            console.log(response);
            this.render();
            this.newObject.name = '';
            this.newObject.description = '';
            this.newObject.jsonOptions = {};
            this.newObject.type = '';
            this.newObject.enabled = '';
          });
      }
    },
  },
};
</script>

<style scoped>
.table-head {
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 3fr 1fr 1fr;
  margin-bottom: 10px;
}

.table-head div {
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  border-bottom: 2px solid black;
}

.list {

}

.list-item {
  display: grid;
  grid-template-columns: 1fr 4fr 2fr 3fr 1fr 1fr;
}

.list-item-form {
  display: flex;
}

.enabled-status {
  display: flex;
  justify-content: center;
  align-content: center;
  border-radius: 20px;
  margin: 1px;
}

input {
  width: 50px;
}

.green {
  background-color: green;
}

.red {
  background-color: rgb(246, 87, 87);
}

.entity-id {
  display: flex;
  justify-content: flex-end;
  padding-right: 30px;
}
.form-container {
  height: 50px;
  margin-top: 10px;
}

.form-container >form >label > input {
  width: 150px;
  margin-right: 5px;
  height: 30px;
}

.form-container >form >label > select {
  width: 120px;
  margin-right: 5px;
  height: 30px;
}
.form-container >form > button {
  border-radius: 5px;
  padding: 0 15px;
  margin-right: 5px;
  height: 30px;
}

.add-entry-button {
  width: 120px;
  padding: 5px 15px;
  border-radius: 5px;
}

span:hover {
  transform: scale(1.3);
  cursor: pointer;
}

.icon-delete {
  color: red;
}

.actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
