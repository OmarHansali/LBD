import { iEditUser } from "../constants/Types";
import LoadingButton from "./LoadingButton";
import NavigateBack from "./NavigateBack";

interface iProps {
    data?: iEditUser
}

const UserForm = ({ data }: iProps) => {
    const { username, email, phoneNumber } = data || {}

    return (
        <>
            <NavigateBack />
            <div className="p-5 bg-white border rounded border-black/10 dark:bg-darklight dark:border-darkborder">
                <h2 className="mb-4 text-base font-semibold text-black capitalize dark:text-white/80">
                    User Details
                </h2>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

                    <div className="grid grid-cols-2 col-span-2 gap-2">
                        <div className="space-y-2 w-full">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-input border"
                                placeholder="username"
                                defaultValue={username}
                                required
                            />
                        </div>
                        <div className="space-y-2 w-full">
                            <label>Your email</label>
                            <input
                                type="email"
                                className="form-input border"
                                placeholder="Email"
                                defaultValue={email}
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 col-span-2 gap-2">
                        <div className="space-y-2 w-full">
                            <label>Profession</label>
                            <input
                                type="text"
                                className="form-input border"
                                placeholder="Profession"
                                defaultValue="Ui/Ux Designer"
                                required
                            />
                        </div>
                        <div className="space-y-2 w-full">
                            <label>Location</label>
                            <input
                                type="text"
                                className="form-input border"
                                placeholder="Location"
                                defaultValue="Canada"
                                required
                            />
                        </div>

                    </div>
                    <div className="grid grid-cols-2 col-span-2 gap-2">
                        <div className="space-y-2 w-full">
                            <label>Website</label>
                            <input
                                type="text"
                                className="form-input border"
                                placeholder="Website"
                                defaultValue="websiteexample.com"
                                required
                            />
                        </div>
                        <div className="space-y-2 w-full">
                            <label>Phone</label>
                            <input
                                type="phone"
                                className="form-input border"
                                placeholder="Phone"
                                defaultValue={phoneNumber}
                                required
                            />
                        </div>
                    </div>
                    <LoadingButton isLoading={false} text="Update"  />
                </div>
            </div>
        </>
    )
}
export default UserForm