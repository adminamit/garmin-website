import crypto from "crypto";

/**
 * Verifies the signature from Plural response using HMAC-SHA256.
 *
 * @param {Object} params - The parameters received from Plural redirect.
 * @param {string} secretHexKey - The merchant-provided secret key (hex string).
 * @returns {boolean} true if signature is valid
 */
export function verifyPluralSignature(
  { order_id, status, error_code = "", error_message = "", signature },
  secretHexKey
) {
  if (!order_id || !status || !signature || !secretHexKey) return false;

  try {
    // Build input string
    const inputString = `${order_id}|${status}|${error_code}|${error_message}`;

    // Convert hex key to Buffer
    const keyBuffer = Buffer.from(secretHexKey, "hex");

    // Generate HMAC-SHA256 hash
    const generatedSignature = crypto
      .createHmac("sha256", keyBuffer)
      .update(inputString)
      .digest("hex")
      .toUpperCase();

    // Compare with received signature
    return generatedSignature === signature.toUpperCase();
  } catch (err) {
    console.error("Signature verification failed:", err);
    return false;
  }
}
