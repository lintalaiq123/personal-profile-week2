const { test, expect } = require("@playwright/test");
const { PortfolioPage } = require("../pages/PortfolioPage");

test("Verify portfolio page loads with correct title", async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);

  await portfolioPage.goto();

  await expect(page).toHaveTitle("Linta Laiq | Software QA Intern");
});

test("Verify navigation links work correctly", async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);

  await portfolioPage.goto();

  // About
  await portfolioPage.clickAbout();
  await expect(portfolioPage.aboutSection).toBeInViewport();

  // Education
  await portfolioPage.clickEducation();
  await expect(portfolioPage.educationSection).toBeInViewport();

  // Skills
  await portfolioPage.clickSkills();
  await expect(portfolioPage.skillsSection).toBeInViewport();

  // Goals
  await portfolioPage.clickGoals();
  await expect(portfolioPage.goalsSection).toBeInViewport();

  // Contact
  await portfolioPage.clickContact();
  await expect(portfolioPage.contactSection).toBeInViewport();
});

test("Verify important UI elements are visible", async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);

  await portfolioPage.goto();

  // Verify profile name
  await expect(portfolioPage.profileName).toBeVisible();

  // Verify profile image
  await expect(portfolioPage.profileImage).toBeVisible();

  // Verify main sections
  await expect(portfolioPage.aboutSection).toBeAttached();
  await expect(portfolioPage.educationSection).toBeAttached();
  await expect(portfolioPage.skillsSection).toBeAttached();
  await expect(portfolioPage.goalsSection).toBeAttached();
  await expect(portfolioPage.contactSection).toBeAttached();

  // Verify Contact Me link
  await expect(portfolioPage.contactMeButton).toBeVisible();
});

test("Verify Contact Me button navigates to Contact section", async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);

  await portfolioPage.goto();

  await portfolioPage.clickContactMe();

  await expect(portfolioPage.contactSection).toBeInViewport();
});

test("Verify successful contact form submission with valid data", async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);

  await portfolioPage.goto();

  // Fill the form with valid data
  await portfolioPage.fillContactForm(
    "Linta Laiq",
    "lintaa@example.com",
    "This is a test message."
  );

  // Submit the form
  await portfolioPage.submitContactForm();

  // Verify success message
  await expect(portfolioPage.successMessage).toHaveText(
    "Thank you! Your message has been sent successfully."
  );
});

test("Verify contact form rejects invalid email", async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);

  await portfolioPage.goto();

  // Fill the form with an invalid email
  await portfolioPage.fillContactForm(
    "Linta Laiq",
    "lintaa@invalid",
    "This is a test message."
  );

  // Submit the form
  await portfolioPage.submitContactForm();

  // Verify email validation error
  await expect(portfolioPage.emailError).toBeVisible();
});

test("Verify contact form validation for empty fields", async ({ page }) => {
  const portfolioPage = new PortfolioPage(page);

  await portfolioPage.goto();

  // Submit the empty form
  await portfolioPage.submitContactForm();

  // Verify validation messages are displayed
  await expect(portfolioPage.nameError).toBeVisible();
  await expect(portfolioPage.emailError).toBeVisible();
  await expect(portfolioPage.messageError).toBeVisible();
});