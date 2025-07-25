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
        className="h-3 w-auto mr-1 inline-block"
      />
    );
  }
  return null;
}

const FriendCard = ({ friend }) => {
  return (
    <div className="relative rounded-xl bg-white bg-opacity-80 backdrop-blur-md border border-gray-200 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out overflow-hidden hover:scale-[1.02]">
      {/* Profile Image */}
      <div className="relative w-full h-36 bg-gradient-to-tr from-indigo-500 to-purple-500">
        <div className="absolute top-2 left-2 bg-white text-xs px-2 py-0.5 rounded-full shadow-sm font-semibold text-gray-700">
          {friend.fullName.split(" ")[0]}
        </div>
        <div className="absolute bottom-[-1.5rem] left-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-md">
            <img
              src={friend.profilePic}
              alt={friend.fullName}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="pt-10 pb-4 px-4">
        {/* Full Name */}
        <h3 className="text-lg font-semibold truncate text-gray-800 mb-2 text-center">
          {friend.fullName}
        </h3>

        {/* Language Badges */}
        <div className="flex flex-col gap-1 mb-4 text-sm text-center">
          <div className="flex items-center justify-center gap-2">
            {getLanguageFlag(friend.nativeLanguage)}
            <span className="text-gray-700">Native: {friend.nativeLanguage}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            {getLanguageFlag(friend.learningLanguage)}
            <span className="text-gray-700">Learning: {friend.learningLanguage}</span>
          </div>
        </div>

        {/* Message Button */}
        <Link
          to={`/chat/${friend._id}`}
          className="block w-full text-center py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600 transition"
        >
          Message
        </Link>
      </div>
    </div>
  );
};

export default FriendCard;
