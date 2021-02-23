<template>
    <div>
        <div v-for="user in users" :key="user.id">
            <p>{{ user.name }}</p>
            <p>{{ user.age }}</p>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";
export default {
  computed: mapState({
    users: state => state.users,
  }),
  name:'Users',
  methods:{
      ...mapMutations(['get_users_mutation']),
      ...mapActions(['get_users_action']),
  },
  mounted(){
      this.get_users_action()
  }
}
</script>