<template>
  <div class="email-contact">
    <div class="email-input">
      <form @submit.prevent="saveEmail" class="email-contact-form">
        <input
          type="email"
          v-model="email"
          placeholder="Your email"
          class="maliont-input"
          autocomplete="off"
          autocapitalize="off"
          autocorrect="off"
          spellcheck="false"
        />
        <div style="position: absolute; top: 1px; right: 1px; bottom: 1px">
          <button class="maliont-send-input" type="submit">Get a Quote</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { setDoc, doc } from "firebase/firestore";

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    async saveEmail() {
      if (this.email && this.email.includes("@")) {
        try {
          const db = this.$nuxt.$db;

          await setDoc(doc(db, "emails", this.email), {
            email: this.email,
            timestamp: new Date(),
          });

          this.email = "";
        } catch (error) {
          console.error("Error saving email:", error);
        }
      }
    },
  },
};
</script>
