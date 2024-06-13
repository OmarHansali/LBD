import user from "../../../public/assets/images/user.png"
import loggedUser from "../../services/LoggedUser";
import NavigateBack from "./NavigateBack";


const Settings = () => {

    const { email, phoneNumber, CEN, username, profile, role } = loggedUser
    return (
        <>
            <NavigateBack />
            <div className="flex flex-col gap-4 min-h-[calc(100vh-212px)]">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 className="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                            Détails de l'utilisateur
                        </h2>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="space-y-2 md:col-span-2">
                                <label>Username</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="username"
                                    defaultValue={"username"}
                                    required
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label>Email</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="Email"
                                    defaultValue={"email"}
                                    required
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label>Profession</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Profession"
                                    defaultValue="Ui/Ux Designer"
                                    required
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label>Location</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Location"
                                    defaultValue="Canada"
                                    required
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label>Website</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Website"
                                    defaultValue="websiteexample.com"
                                    required
                                />
                            </div>
                            <div className="space-y-2 md:col-span-2">
                                <label>Phone</label>
                                <input
                                    type="phone"
                                    className="form-input"
                                    placeholder="Phone"
                                    defaultValue={"phoneNumber"}
                                    required
                                />
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    className="btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn bg-light border border-light rounded-md text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85]"
                                >
                                    Discard
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 className="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                            Photo Profile
                        </h2>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex items-center gap-4">
                                <img
                                    src={user}
                                    className="w-16 h-16 rounded-full"
                                    alt=""
                                />
                                <div>
                                    <h5 className="text-lg font-bold dark:text-white">
                                        {username}
                                    </h5>
                                    <p className="text-muted mt-0.5 dark:text-darkmuted">
                                        { role }
                                    </p>
                                </div>
                            </div>
                            <div
                                id="FileUpload"
                                className="relative block w-full p-4 border-2 border-dashed rounded appearance-none cursor-pointer border-primary bg-light/20 dark:bg-white/5 dark:border-darkborder"
                            >
                                <input
                                    type="file"
                                    accept="images/*"
                                    className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
                                />
                                <div className="flex flex-col items-center justify-center space-y-3 dark:text-darkmuted">
                                    <span className="flex items-center justify-center rounded-full h-14 w-14 bg-light/50 dark:bg-white/10 dark:text-white">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            className="inline-block w-5 h-5"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M4 19H20V12H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V12H4V19ZM13 9V16H11V9H6L12 3L18 9H13Z"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p>
                                        <span className="text-purple">Click to upload</span> or drag
                                        and drop
                                    </p>
                                    <p>SVG, PNG, JPG or GIF</p>
                                    <p>(max, 100 X 100px)</p>
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    className="btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn bg-light border border-light rounded-md text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85]"
                                >
                                    Discard
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 className="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                            Change Password
                        </h2>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label>Current Password</label>
                                <input
                                    type="password"
                                    className="form-input"
                                    placeholder="Current Password"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label>New Password</label>
                                <input
                                    type="password"
                                    className="form-input"
                                    placeholder="New Password"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label>Confirm Password</label>
                                <input
                                    type="password"
                                    className="form-input"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    className="btn bg-purple border border-purple rounded-md text-white transition-all duration-300 hover:bg-purple/[0.85] hover:border-purple/[0.85]"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    className="btn bg-light border border-light rounded-md text-black transition-all duration-300 hover:bg-light/[0.85] hover:border-light/[0.85]"
                                >
                                    Discard
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                        <h2 className="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                            Notifications
                        </h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between gap-4">
                                Email Notifications
                                <div className="inline-block togglebutton">
                                    <label
                                        htmlFor="toggleD2"
                                        className="flex items-center cursor-pointer"
                                    >
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                id="toggleD2"
                                                className="sr-only"
                                            />
                                            <div className="block band bg-black/10 w-[54px] h-[29px] rounded-full dark:bg-dark"></div>
                                            <div className="dot absolute left-[3px] top-[2px] bg-white w-6 h-6 rounded-full transition"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                Billing Updates
                                <div className="inline-block togglebutton">
                                    <label
                                        htmlFor="toggleD3"
                                        className="flex items-center cursor-pointer"
                                    >
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                id="toggleD3"
                                                className="sr-only"
                                                defaultChecked
                                            />
                                            <div className="block band bg-black/10 w-[54px] h-[29px] rounded-full dark:bg-dark"></div>
                                            <div className="dot absolute left-[3px] top-[2px] bg-white w-6 h-6 rounded-full transition"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                API Access
                                <div className="inline-block togglebutton">
                                    <label
                                        htmlFor="toggleD4"
                                        className="flex items-center cursor-pointer"
                                    >
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                id="toggleD4"
                                                className="sr-only"
                                            />
                                            <div className="block band bg-black/10 w-[54px] h-[29px] rounded-full dark:bg-dark"></div>
                                            <div className="dot absolute left-[3px] top-[2px] bg-white w-6 h-6 rounded-full transition"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                                Newsletters
                                <div className="inline-block togglebutton">
                                    <label
                                        htmlFor="toggleD5"
                                        className="flex items-center cursor-pointer"
                                    >
                                        <div className="relative">
                                            <input
                                                type="checkbox"
                                                id="toggleD5"
                                                className="sr-only"
                                                defaultChecked
                                            />
                                            <div className="block band bg-black/10 w-[54px] h-[29px] rounded-full dark:bg-dark"></div>
                                            <div className="dot absolute left-[3px] top-[2px] bg-white w-6 h-6 rounded-full transition"></div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Settings;
