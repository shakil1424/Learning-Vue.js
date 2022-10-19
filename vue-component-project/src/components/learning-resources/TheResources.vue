<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
      >Store Resources</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add Resources</base-button
    >
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>
<script>
import StoredResources from './StoredResources.vue';
import AddResource from './AddResource.vue';
export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'THe official vue js documentation ',
          link: 'https://vue.js.org',
        },
        {
          id: 'official-guide2',
          title: 'Official Guide',
          description: 'THe official vue js documentation ',
          link: 'https://vue.js.org',
        },
      ],
    };
  },
  methods: {
    deleteResource(resourceId) {
      console.log('inside parent 1223123 ' + resourceId);
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resourceId
      );
      this.storedResources.splice(resIndex, 1);
    },
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      //console.log('Inside the resources' + title + description + link);
      const newResource = {
        id: new Date().toString(),
        title: title,
        description: description,
        link: link,
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resources';
    },
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
};
</script>
