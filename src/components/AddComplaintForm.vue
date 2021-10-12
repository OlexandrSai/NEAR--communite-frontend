<template>
<div class="shadow-2xl rounded-3xl mt-10 ml-10 px-12 py-4" style="width: 600px; background: rgba(255, 255, 255, 0.5);"> 
                <Form  class="mt-10 w-full"
                    @submit="handleSubmit"
                    :validation-schema="schema">
                    <div 
                        v-for="field in  formFields"
                        :key="field.id">
                        <div class="mt-8">
                            <h3  class="text-lg font-semibold" :for="field.id">{{field.label}}</h3>
                            <Field class="outline-none shadow-xl w-full rounded-3xl py-4 px-6 mt-4"
                                :v-model="field.id"
                                type="text"
                                :name="field.id"
                                :id="field.id"
                                placeholder="Write here"/>
                                <ErrorMessage :name="field.id" class="w-64 text-red-500" />
                        </div>

                    </div>

                    <div class="mt-8">
                        <h3 class="text-lg font-semibold">
                            Category
                        </h3>
                        <Field 
                            as="select"
                            v-model="category"
                            name="category"
                            id="category"
                            class="outline-none shadow-xl w-full rounded-3xl py-4 px-6 mt-4"
                            >
                                <option>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </Field>
                    </div>
                    
                    <div class="w-full mt-10 flex justify-center">
                        <button  class="bg-purple-500 hover:bg-purple-400 text-white text-lg font-semibold py-4 px-8 rounded-full">Create</button>
                    </div>
                </Form>
            </div>
</template>

<script>
import { ref } from "vue";
//import router from '@/router/index.js'
import { useForm, useField, Form, Field, ErrorMessage } from "vee-validate";

export default {
    props: {
        addNewComplaint:  {
            type: Function,
            required: true
        }
    },
    components: {
        Form,
        Field,
        ErrorMessage
    },
    setup(props) {
        const schema = {
            title(value) {
                if (!value) {
                    return "This  field is required";
                }
                if (value.length < 2) {
                    return "minimum length is 2";
                } 
                return  true;
            },
            description(value) {
                if (!value) {
                    return "This  field is required";
                }
                if (value.length < 3) {
                    return "minimum length is 5";
                } 
                return  true;
            },
            location(value) {
                 if (!value) {
                    return "This  field is required";
                }
                if (value.length < 5) {
                    return "minimum length is 3";
                } 
                return  true;
            }
        }

        useForm({
            validationsSchema:  schema
        })

        // eslint-disable-next-line no-unused-vars
        const { value: title, errorMessage: titleError } = useField("title");
        // eslint-disable-next-line no-unused-vars
        const { value: description, errorMessage: descriptionError } = useField("description");
        // eslint-disable-next-line no-unused-vars
        const { value: location, errorMessage: locationError } = useField("location");

        const  category = ref(0)

        const handleSubmit = (values) => {
            var promise = props.addNewComplaint(values)
            promise.then(result => {console.log(result.transaction.hash), error => {console.log(error)}})
            //router.push('/dashboard')
        }

        const  formFields = [
            {
                label: "Complaint title",
                id: "title",
            },
            {
                label: "Description",
                id: "description",
            },
            {
                label:"Location",
                id: "location",
            },
        ];

        return {
            schema,
            category,
            handleSubmit,
            formFields
        }
    }
}
</script>