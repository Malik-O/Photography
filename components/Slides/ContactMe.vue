<template lang="pug">
    .ContactMe.Slide
        splitter(text='Contact Me')
        v-container.top
            v-form(v-model="valid" lazy-validation)
                v-row(justify='start').checkbox
                    v-col(cols='2')
                        v-btn(outlined width='100%').curser_hover_active Have a project
                //- topic
                v-row What can i do for you ?
                v-row(justify='start').checkbox
                    v-col(v-for='service in services' :key='service' cols='2')
                        v-btn(outlined width='100%').curser_hover_active {{service}}
                //- Budget
                v-row Budget in USD
                v-row(justify='start').radio
                    v-col(v-for='budget in budgets' :key='budget' cols='2')
                        v-btn(outlined width='100%').curser_hover_active {{budget}}
                v-row(justify='space-between')
                    v-col.pl-0 #[v-text-field(v-model="name" clearable label="Your name").curser_hover_active]
                    v-col #[v-text-field(v-model="email" clearable :rules="emailRules" label="Your e-mail").curser_hover_active]
                v-row 
                    v-col.pl-0 #[v-textarea(label="Project details" auto-grow rows="3" row-height="15").curser_hover_active]
                //- v-row 
                //-     v-col #[v-file-input(truncate-length="10" label="" counter multiple show-size small-chips)]
</template>

<script>
import splitter from "@/components/splitter";
export default {
    data: () => ({
        name: "",
        email: "",
        file: "",
        valid: "",
        emailRules: [
            (v) => !!v || "E-mail is required",
            (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
        ],
        services: ["design", "front end", "back end", "other"],
        budgets: ["under 500", "1k - 2k", "2k - 5k", "5k+"],
    }),
    components: { splitter },
};
</script>

<style scoped lang="sass">
@import "@/assets/style/ContactMe"
</style>
