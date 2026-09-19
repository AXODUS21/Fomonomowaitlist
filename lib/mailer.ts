import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 465,
  secure: Number(process.env.SMTP_PORT) === 465 || true,
  auth: {
    user: process.env.SMTP_USER || "fomonomo.news@gmail.com",
    pass: process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD || "",
  },
});

export async function sendWaitlistConfirmationEmail(
  toEmail: string,
  spotNumber: number
) {
  const smtpUser = process.env.SMTP_USER || "fomonomo.news@gmail.com";
  const smtpPass = process.env.SMTP_PASS || process.env.GMAIL_APP_PASSWORD;
  const fromAddress =
    process.env.SMTP_FROM || `"FOMO NOMO" <${smtpUser}>`;

  // If no SMTP password provided, log a dev note so the app doesn't crash
  if (!smtpPass || smtpPass === "your_gmail_app_password_here") {
    console.warn(
      `[Mailer Notice] Email not sent to ${toEmail} because SMTP_PASS is not configured yet. Set GMAIL_APP_PASSWORD or SMTP_PASS in .env.local to send live emails via fomonomo.news@gmail.com.`
    );
    return { success: false, reason: "SMTP credentials not configured" };
  }

  const referralLink = `https://fomonomo.app/join?ref=vip-${spotNumber}`;

  const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to the FOMO NOMO Waitlist</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #F4F7F6;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      color: #2D3748;
      -webkit-font-smoothing: antialiased;
    }
    .wrapper {
      width: 100%;
      background-color: #F4F7F6;
      padding: 40px 16px;
    }
    .container {
      max-width: 560px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border-radius: 28px;
      padding: 40px 32px;
      border: 1px solid rgba(45, 55, 72, 0.08);
      box-shadow: 0 10px 30px rgba(45, 55, 72, 0.04);
    }
    .header {
      text-align: center;
      margin-bottom: 28px;
    }
    .brand-title {
      font-size: 24px;
      font-weight: 900;
      letter-spacing: -0.5px;
      color: #2D3748;
      margin: 0;
    }
    .brand-accent {
      color: #2563EB;
    }
    .badge {
      display: inline-block;
      background-color: #A3D6BC;
      color: #2D3748;
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      padding: 6px 14px;
      border-radius: 9999px;
      margin-bottom: 18px;
    }
    .headline {
      font-size: 32px;
      font-weight: 900;
      line-height: 1.15;
      letter-spacing: -0.8px;
      color: #2D3748;
      margin: 0 0 14px 0;
    }
    .subtitle {
      font-size: 16px;
      line-height: 1.6;
      color: #718096;
      margin: 0 0 24px 0;
    }
    .ticket-box {
      background: linear-gradient(135deg, #F4F7F6 0%, #FFFFFF 100%);
      border: 1px solid #E2E8F0;
      border-radius: 20px;
      padding: 24px;
      text-align: center;
      margin-bottom: 28px;
    }
    .ticket-label {
      font-size: 11px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #718096;
      margin-bottom: 4px;
    }
    .ticket-number {
      font-size: 36px;
      font-weight: 900;
      color: #2563EB;
      letter-spacing: -1px;
      margin: 0;
    }
    .card-list {
      background-color: #F8FAFC;
      border-radius: 18px;
      padding: 20px 22px;
      margin-bottom: 28px;
      border: 1px solid #EDF2F7;
    }
    .card-item {
      display: flex;
      align-items: flex-start;
      margin-bottom: 12px;
      font-size: 14px;
      line-height: 1.5;
      color: #4A5568;
    }
    .card-item:last-child {
      margin-bottom: 0;
    }
    .card-bullet {
      color: #10B981;
      font-weight: bold;
      margin-right: 10px;
      font-size: 16px;
    }
    .referral-box {
      background-color: #FFFFFF;
      border: 1px solid #E2E8F0;
      border-radius: 18px;
      padding: 20px;
      text-align: center;
      margin-bottom: 28px;
    }
    .referral-link {
      display: inline-block;
      margin-top: 10px;
      padding: 12px 24px;
      background-color: #2563EB;
      color: #FFFFFF !important;
      text-decoration: none;
      font-size: 13px;
      font-weight: 700;
      border-radius: 14px;
    }
    .quote-box {
      border-left: 3px solid #AECFD0;
      padding-left: 14px;
      font-style: italic;
      color: #718096;
      font-size: 14px;
      margin: 24px 0;
    }
    .footer {
      text-align: center;
      font-size: 12px;
      color: #A0AEC0;
      padding-top: 24px;
      border-top: 1px solid #EDF2F7;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <h2 class="brand-title">FOMO<span class="brand-accent">NOMO</span></h2>
        <p style="margin: 4px 0 0 0; font-size: 12px; color: #718096;">The Anti-Doomscroll News Digest</p>
      </div>

      <div style="text-align: center;">
        <span class="badge">Early Access Confirmed</span>
        <h1 class="headline">Never miss out again.</h1>
        <p class="subtitle">
          You are officially on the early access waitlist for the <strong>FOMO NOMO</strong> iOS app.
        </p>
      </div>

      <!-- Ticket Spot Box -->
      <div class="ticket-box">
        <div class="ticket-label">Your Priority Waitlist Spot</div>
        <div class="ticket-number">#${spotNumber}</div>
        <p style="margin: 6px 0 0 0; font-size: 12px; color: #718096;">
          Wave 1 iOS TestFlight Allocation
        </p>
      </div>

      <!-- App Philosophy & Perks -->
      <div class="card-list">
        <div class="card-item">
          <span class="card-bullet">✓</span>
          <span><strong>Open → Read → Done:</strong> One calm 5-minute daily briefing tailored to your country and profession.</span>
        </div>
        <div class="card-item">
          <span class="card-bullet">✓</span>
          <span><strong>The &ldquo;Done For Today&rdquo; Lock:</strong> Once read, the app locks the feed to protect your focus and peace of mind.</span>
        </div>
        <div class="card-item">
          <span class="card-bullet">✓</span>
          <span><strong>Pay Once, Own Forever:</strong> Zero subscription anxiety. No monthly charges. No invasive ad tracking.</span>
        </div>
      </div>

      <!-- Referral Share -->
      <div class="referral-box">
        <p style="margin: 0; font-size: 13px; font-weight: 600; color: #2D3748;">
          Want to move up the TestFlight queue?
        </p>
        <p style="margin: 4px 0 12px 0; font-size: 12px; color: #718096;">
          Share your personal invite link with colleagues and friends:
        </p>
        <a href="${referralLink}" class="referral-link" target="_blank">
          Share Your Invite Link
        </a>
      </div>

      <div class="quote-box">
        &ldquo;Take a deep breath. You missed nothing. Go touch grass, read a book, or enjoy the real world.&rdquo;
        <br><span style="font-size: 12px; font-weight: 600; color: #2D3748;">— Zen Nomo (Companion Mascot)</span>
      </div>

      <div class="footer">
        <p style="margin: 0 0 6px 0;">Sent with calm by <strong>FOMO NOMO</strong> by Lumivor</p>
        <p style="margin: 0;">You received this because you requested early access at fomonomo.app</p>
      </div>
    </div>
  </div>
</body>
</html>
  `;

  try {
    const info = await transporter.sendMail({
      from: fromAddress,
      to: toEmail,
      subject: `Never miss out again — Welcome to FOMO NOMO (Spot #${spotNumber})`,
      html: htmlContent,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("[Mailer Error] Failed to send waitlist email:", error);
    return { success: false, error };
  }
}
