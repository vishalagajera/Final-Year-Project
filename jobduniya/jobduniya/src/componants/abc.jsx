import React, { useMemo, useState } from 'react'
import "../../Style/singup.css"
import logo from "../../logo/Logo Files/For Web/png/Color logo - no background.png"
import NavbarBeforeLogin from '../login/NavbarBeforeLogin'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import Lottie from 'lottie-react'
import { Stepper, } from 'react-form-stepper';
import FormButton from '../FormButton'
import FormSelectBox from '../FormSelectBox'
import me from "../../assets/Je3eTqQJrt.json"
import FormContainer from '../FormContainer'
import "../../Style/login.css"
import FormTextboxes from '../FormTextbox'
import { Country } from 'country-state-city'
const Signup = ({ }) => {
    const [screen, setScreen] = useState("step1");
    const [country, setCountry] = useState("");
    // Step 1
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    // Step 2
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    // Step 3
    const [personalAddress, setPersonalAddress] = useState('');
    const [pinCode, setPinCode] = useState('');

    // Step 4 (optional)
    const [skills, setSkills] = useState('');
    const [education, setEducation] = useState('');
    const [workExperience, setWorkExperience] = useState('');
    const [resumeUpload, setResumeUpload] = useState(null);

    const handleCountry = (country) => {
        setCountry(country)
    }
    const [state, setState] = useState("");
    const handleState = (state) => {
        setState(state)
    }
    const [city, setCity] = useState("");
    const handleCity = (city) => {
        setCity(city)
    }
    const renderform = useMemo(() => {
        switch (screen) {
            case "step1":
                return <FormContainer
                    heading={"Sign Up"}
                    leftSection={<Lottie animationData={me} loop={true} style={{ height: "100%", width: "100%" }} />}
                    slogan={<Stepper
                        steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: "step 4" }]}
                        activeStep={1}
                    />}
                    navigat={<p className='--navLink'>Already have an account : <Link to={"/login"}>Login !</Link></p>}
                    textbox1={<FormTextboxes
                        warning="email"
                        type={"text"}
                        onchange={setEmail}
                        className={"--input"}
                        placeholder={"Email"}
                    />}
                    textbox2={
                        <FormTextboxes
                            warning="password"
                            onchange={setPassword}
                            type={"password"}
                            className={"--input"}
                            placeholder={"Password"}
                        />
                    }
                    textbox3={
                        <FormTextboxes
                            type={"password"}
                            warning="confirm password"
                            onchange={setConfirmPassword}
                            className={"--input"}
                            placeholder={"Confirm Password"}
                        />
                    }
                    button={
                        <FormButton
                            className={"--btn"}
                            text={"next"}
                            onClick={() => setScreen("step2")}
                        />
                    }
                />
            case "step2":
                return <FormContainer
                    heading={"Sign Up"}
                    leftSection={<Lottie animationData={me} loop={true} style={{ height: "100%", width: "100%" }} />}
                    slogan={<Stepper
                        steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: "step 4" }]}
                        activeStep={2}
                    />}
                    navigat={<p className='--navLink'>Already have an account : <Link to={"/login"}>Login !</Link></p>}
                    textbox1={<FormTextboxes
                        warning="email"
                        type={"text"}
                        onchange={setEmail}
                        className={"--input"}
                        placeholder={"First Name"}
                    />}
                    textbox2={
                        <FormTextboxes
                            warning="password"
                            onchange={setPassword}
                            type={"Last Name"}
                            className={"--input"}
                            placeholder={"Password"}
                        />
                    }
                    textbox3={
                        <FormTextboxes
                            type={"password"}
                            warning="confirm password"
                            onchange={setConfirmPassword}
                            className={"--input"}
                            placeholder={"Confirm Password"}
                        />
                    }
                    button={
                        <FormButton
                            className={"--btn"}
                            text={"next"}
                            onClick={() => setScreen("step3")}
                        />
                    }
                />
            case "step3":
                return <FormContainer
                    heading={"Sign Up"}
                    leftSection={<Lottie animationData={me} loop={true} style={{ height: "100%", width: "100%" }} />}

                    slogan={<Stepper
                        style={{ color: "#001f3f" }}
                        steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }, { label: "step 4" }]}
                        activeStep={3}
                    />}
                    textbox1={<FormTextboxes
                        type="text"
                        warning="address"
                        className="--input"
                        onchange={setPersonalAddress}
                        placeholder="Personal Address"
                    />}
                    textbox2={<FormSelectBox
                        type="text"
                        className="--input"
                        onchange=""
                        warning="country"
                        placeholder="Street Address"
                        arrayKey="country"
                        country={handleCountry}
                        selectedCountry={country}
                        selectedState={state}
                        state={handleState}
                        selectedCity={city}
                        city={handleCity}
                    />}
                    textbox3={<FormSelectBox
                        type="text"
                        warning="states"
                        className="--input"
                        arrayKey="states"
                        selectedCountry={country}
                        country={handleCountry}
                        selectedState={state}
                        state={handleState}
                        selectedCity={city}
                        city={handleCity}
                    />}
                    textbox4={<FormSelectBox
                        type="text"
                        className="--input"
                        arrayKey="cities"
                        warning="city"
                        selectedCountry={country}
                        country={handleCountry}
                        selectedState={state}
                        state={handleState}
                        selectedCity={city}
                        city={handleCity} 
                    />}
                    textbox5={<FormTextboxes
                        onchange={setPinCode}
                        type="text"
                        className="--input"
                        warning="pincode"
                        placeholder="Pincod"
                    />}
                    button={
                        < FormButton
                            className={"--btn"}
                            text={"next"}
                            onClick={() => setScreen("step1")}
                        />
                    }
                />
            default:
                return <h1>not found</h1>
        }
    }, [screen, country, state, city])
    // Check()
    const navigate = useNavigate();
    if (Cookies.get("token")) {
        navigate("/home");
    }

    return (
        <>
            <NavbarBeforeLogin />
            {renderform}
        </>
    )
}

export default Signup