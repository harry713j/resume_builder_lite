import { Input } from "../index";

function ProfileForm({ data, onInputChange }) {
  return (
    <div className="flex flex-wrap gap-7 items-center justify-center mb-16">
      <Input
        label="First Name"
        className="mr-20"
        name="firstName"
        placeholder="John"
        value={data.firstName}
        onChange={onInputChange}
        required
      />
      <Input
        label="Last Name"
        className="mr-20"
        name="lastName"
        placeholder="Doe"
        value={data.lastName}
        onChange={onInputChange}
        required
      />
      <Input
        label="Job title"
        className="mr-20"
        name="jobTitle"
        placeholder="Software Developer"
        value={data.jobTitle}
        onChange={onInputChange}
        required
      />
      <Input
        type="email"
        label="Email"
        className="mr-20"
        name="email"
        placeholder="johndoe@email.com"
        value={data.email}
        onChange={onInputChange}
        required
      />
      <Input
        type="tel"
        label="Phone Number"
        className="mr-20"
        name="phoneNumber"
        placeholder="0000-000-000"
        value={data.phoneNumber}
        onChange={onInputChange}
      />
      <Input
        type="text"
        label="LinkedIn Profile"
        className="mr-20"
        name="linkedInProfile"
        placeholder="linkedin.com/us/johndoe"
        value={data.linkedInProfile}
        onChange={onInputChange}
      />
      <Input
        type="text"
        label="Github Profile"
        className="mr-20"
        name="githubProfile"
        placeholder="github.com/johndoe"
        value={data.githubProfile}
        onChange={onInputChange}
      />
      <Input
        type="text"
        label="Personal Website (optional)"
        className="mr-20"
        name="website"
        placeholder="www.johndoe.com"
        value={data.website}
        onChange={onInputChange}
      />
    </div>
  );
}

export default ProfileForm;
