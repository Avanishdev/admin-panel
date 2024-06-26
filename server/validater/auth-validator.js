const {z}=require("zod");
const signupSchema=z.object({
    username:z
    .string({required_error:"Name is required"})
    .trim()
    .min(3,{message:"Name must be atleast of 3 or more characters"})
    .max(255,{message:"Name must not be more than 255 characters"}),
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message:"Email must be atleast of 3 or more characters"})
    .max(255,{message:"Email must not be more than 255 characters"}),
    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message:"Phone must be atleast of 10 cahracters"})
    .max(20,{message:"Phone must not be more than 20 cahracters"}),
    password:z
    .string({message:"Password is required"})
    .min(7,{message:"Password must be atleast of 6 characters"})
    .max(1024,{message:"Password must not be greater than 1024 characters"})
});
const signinSchema=z.object({
    email:z
        .string({required_error:"Email is required"})
        .trim()
        .email({message:"Invalid email address"})
        .min(3,"Email must be atleast of 3 or more characters")
        .max(255,"Email must not be greater than 255 characters"),
    password:z
        .string({required_error:"Password is required"})
        .min(7,"Passoword must be atleast of 7 or more characters")
        .max(1024,"Password must not be greater than 1024 characters")
});
module.exports={signupSchema,signinSchema};