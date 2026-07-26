/**
 * Substack signup embed.
 */

const SUBSTACK_URL = "https://sephnews.substack.com";

function SubstackSignup() {
  return (
    <div className="w-full max-w-sm">
      <p className="text-sm opacity-70 mb-3 text-center">
        Get notified for Episode 2
      </p>
      <iframe
        src={`${SUBSTACK_URL}/embed`}
        width="100%"
        height="150"
        style={{ border: "none", background: "transparent" }}
        frameBorder="0"
        scrolling="no"
        title="Substack signup"
      />
    </div>
  );
}

export default SubstackSignup;
