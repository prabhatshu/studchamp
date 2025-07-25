import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";

export function getLanguageFlag(language) {
  if (!language) return null;

  const langLower = language.toLowerCase();
  const countryCode = LANGUAGE_TO_FLAG[langLower];

  if (countryCode) {
    return (
      <img
        src={`https://flagcdn.com/24x18/${countryCode}.png`}
        alt={`${langLower} flag`}
        className="h-3 mr-1 inline-block"
      />
    );
  }
  return null;
}

const FriendCard = ({ friend }) => {
  return (
    <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-200 rounded-xl">
      <div className="card-body p-5">

        {/* USER INFO */}
        <div className="flex items-center gap-4 mb-4">
          <div className="avatar">
            <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={friend.profilePic} alt={friend.fullName} />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-base-content">
              {friend.fullName}
            </h3>
          </div>
        </div>

        {/* LANGUAGES */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="badge badge-primary badge-outline text-sm">
            {getLanguageFlag(friend.nativeLanguage)}
            Native: {friend.nativeLanguage}
          </span>
          <span className="badge badge-secondary badge-outline text-sm">
            {getLanguageFlag(friend.learningLanguage)}
            Learning: {friend.learningLanguage}
          </span>
        </div>

        {/* MESSAGE BUTTON */}
        <Link
          to={`/chat/${friend._id}`}
          className="btn btn-primary btn-block rounded-full text-sm capitalize"
        >
          Message
        </Link>
      </div>
    </div>
  );
};

export default FriendCard;

