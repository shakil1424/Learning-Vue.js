<template>
  <div>
    <the-header></the-header>
    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <template #default="slotProps">
        <h2>
          <h4>{{ slotProps.item }}</h4>
          <p>{{ slotProps['extra'] }}</p>
        </h2>
      </template>
    </course-goals> -->
    <button>Active Goals</button>
    <button>Manage Goals</button>
    <active-goals></active-goals>
    <manage-goals></manage-goals>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
/* import UserInfo from './components/UserInfo.vue';
import BadgeList from './components/BadgeList.vue';
import CourseGoals from './components/CourseGoals.vue'; */
import ActiveGoals from './components/ActiveGoals.vue';
import ManageGoals from './components/ManageGoals.vue';

export default {
  components: {
    TheHeader,
    /*  UserInfo,
    BadgeList,
    CourseGoals, */
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
