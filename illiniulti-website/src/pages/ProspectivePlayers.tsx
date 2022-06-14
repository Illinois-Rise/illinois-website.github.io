
import { Box, Button, FormControl, FormControlLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import {Controller, useForm} from 'react-hook-form';
import { FormInputText } from '../components/FormInputText';
import FormMessage from '../components/FormMessage';

function ProspectivePlayers() {
    const { handleSubmit, control, reset, formState: { errors } } = useForm();
    const [ success, setSuccess ] = useState(false);
    const formOptions = {
        firstname: { required: "First Name is required" },
        lastname: { required: "Last Name is required" },
        email: { required: "Email is required" },
        hometown: { required: "Hometown is required" },
        highschool: { required: "High School is required" },
        major: { required: "Major is required (say Undecided if you don't know)" },
        experience: { required: "Tell us something about your experience!" },
        clubs: {required: "Say No if there are no clubs you plan to join"}
        
    }
    const onFormSubmit = (data: any) => {
        console.log(data)
        setSuccess(true)

    }

    const onError = (errors: any) => {
        console.log(errors)
    }
    //https://blog.logrocket.com/using-material-ui-with-react-hook-form/
    //TODO: Form validation
    //TODO: Needs something at the bottom to say that its submitted, as well as a loading button *
    return (
        <>
        <h1 className="ui header">Prospective Players</h1>

        <p>Illinois Ultimate has had a long history since its inception in the early 1990s and now consistently competes with best competition around the country. Illinois has qualified for national championships frequently behind our dedication, determination, and distinguished character on and off the field. Illinois alumni have gone on to play for nationals caliber club teams such as Chicago Machine, Minneapolis Drag 'n Thrust, Cincinnati Steamboat, Atlanta Chain Lightning, and San Francisco Blackbird. Alumni have played on professional AUDL teams such as the Chicago Wildfire, Minnesota Windchill, Cincinnati Revolution, and the San Jose Spiders. They have also created and captained club teams including Chicago Machine, Black Market Ultimate, and Beachfront Ultimate, and have gone on to coach college ultimate at the University of Illinois, the University of Chicago, Northwestern University, and the University of Kentucky. It's safe to say that once you play ultimate at Illinois you are opened up to a world of opportunity through our alumni network, who are more than willing to assist you on your journey though ultimate during and beyond your college years.</p>
        <p>While you are at Illinois you will enjoy a number of experiences. This ranges from team socials to study groups and from practices in Irwin Fieldhouse to playing games on the shores of San Diego. Your teammates won't only be your best friends, they will be family. You will learn the various ways ultimate is played, how to expand your throwing arsenal, how to improve your athleticism, and how to take your game to the next level. A majority of our team didn't play organized ultimate before coming to college, and are now some of the best players in the Great Lakes region (see our All-Regions honors page).</p>
        <p>We encourage prospective players to fill out our interest form and to reach out to the captains especially if you will be on campus. We are more than happy to meet up and discuss what Illinois can do for you, and to see what you can do to be ready for Illinois once you get on campus. Our contact information is below. Thank you for taking the time to visit our website, and we hope to hear from you soon.</p>

        <Box 
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
            }}>
            <form onSubmit={handleSubmit(onFormSubmit, onError)}>
                <FormInputText
                    name={"firstName"}
                    control={control}
                    label={"First Name"}
                    rules={formOptions.firstname}
                />
                {errors?.firstName && <FormMessage message={errors.firstName.message} isFailure={true}/>}
                <FormInputText
                    name={"lastName"}
                    control={control}
                    label={"Last Name"}
                    rules={formOptions.lastname}
                />
                {errors?.lastName && <FormMessage message={errors.lastName.message} isFailure={true}/>}
                <FormInputText
                    name={"email"}
                    control={control}
                    label={"Email"}
                    rules={formOptions.email}
                />
                {errors?.email && <FormMessage message={errors.email.message} isFailure={true}/>}
                <FormInputText
                    name={"hometown"}
                    control={control}
                    label={"Hometown"}
                    rules={formOptions.hometown}
                />
                {errors?.hometown && <FormMessage message={errors.hometown.message} isFailure={true}/>}
                <FormInputText
                    name={"highschool"}
                    control={control}
                    label={"High School Attended"}
                    rules={formOptions.highschool}
                />
                {errors?.highschool && <FormMessage message={errors.highschool.message} isFailure={true}/>}
                <FormInputText
                    name={"major"}
                    control={control}
                    label={"Planned Major"}
                    rules={formOptions.major}
                />
                {errors?.major && <FormMessage message={errors.major.message} isFailure={true}/>}
                <FormInputText
                    name={"experience"}
                    control={control}
                    label={"Ultimate Frisbee Experience"}
                    multiline={true}
                    rules={formOptions.experience}
                />
                {errors?.experience && <FormMessage message={errors.experience.message} isFailure={true}/>}
                <FormInputText
                    name={"clubs"}
                    control={control}
                    label={"Are there any other clubs you plan to join?"}
                    multiline={true}
                    rules={formOptions.clubs}
                />
                {errors?.clubs && <FormMessage message={errors.clubs.message} isFailure={true}/>}
                <Typography>Would you be alright with a captain or coach reaching out to you? *</Typography>
                <Controller
                    name={"contact"}
                    control={control}
                    defaultValue={"Yes"}
                    render={({field: { onChange, value }}) => (
                        <RadioGroup value={value} onChange={onChange} row defaultValue="Yes">
                            <FormControlLabel value="Yes" control={<Radio/>} label="Yes"/>
                            <FormControlLabel value="No" control={<Radio/>} label="No"/>
                        </RadioGroup>
                )}
    />
                <Button onClick={handleSubmit(onFormSubmit)} variant="outlined">Submit</Button>
                
            </form>
                
            {success ? 
             <FormMessage message="Form Successfully Submitted" isFailure={false}/> : <></>
            }
        </Box>
        </>
        
    )
}

export default ProspectivePlayers;