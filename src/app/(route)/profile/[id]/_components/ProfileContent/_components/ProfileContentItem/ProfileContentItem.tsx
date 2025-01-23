interface ProfileContentItemProps {
  value: string;
  label: string;
}

const ProfileContentItem = ({ value, label }: ProfileContentItemProps) => {
  return (
    <li>
      <strong>{label}</strong>
      <span>{value}</span>
    </li>
  );
};

export default ProfileContentItem;
