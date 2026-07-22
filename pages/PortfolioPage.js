class PortfolioPage {
    constructor(page) {
      this.page = page;
  
      // Navigation links
      this.aboutLink = page.getByRole("link", { name: "About", exact: true });
this.educationLink = page.getByRole("link", { name: "Education", exact: true });
this.skillsLink = page.getByRole("link", { name: "Skills", exact: true });
this.goalsLink = page.getByRole("link", { name: "Goals", exact: true });
this.contactLink = page.getByRole("link", { name: "Contact", exact: true });


      // Page sections
this.aboutSection = page.locator("#about");
this.educationSection = page.locator("#education");
this.skillsSection = page.locator("#skills");
this.goalsSection = page.locator("#goals");
this.contactSection = page.locator("#contact");
  
      // Main page elements
      this.profileName = page.getByRole("heading", { name: "Linta Laiq" });
this.profileImage = page.locator('img[alt="Linta Laiq profile photo"]');
this.contactMeButton = page.getByRole("link", { name: "Contact Me", exact: true });

      // Contact form
      this.nameInput = page.locator("#name");
      this.emailInput = page.locator("#email");
      this.messageInput = page.locator("#message");
      this.submitButton = page.getByRole("button", {
        name: "Send Message"
      });
  
      // Validation messages
      this.nameError = page.locator("#nameError");
      this.emailError = page.locator("#emailError");
      this.messageError = page.locator("#messageError");
      this.successMessage = page.locator("#successMessage");
    }
  
    async goto() {
        await this.page.goto("https://personal-profile-week2.vercel.app/");
    }
  
    async fillContactForm(name, email, message) {
      await this.nameInput.fill(name);
      await this.emailInput.fill(email);
      await this.messageInput.fill(message);
    }
  
    async submitContactForm() {
      await this.submitButton.click();
    }
    async clickAbout() {
      await this.aboutLink.click();
    }
    
    async clickEducation() {
      await this.educationLink.click();
    }
    
    async clickSkills() {
      await this.skillsLink.click();
    }
    
    async clickGoals() {
      await this.goalsLink.click();
    }
    
    async clickContact() {
      await this.contactLink.click();
    }

    async clickContactMe() {
      await this.contactMeButton.click();
    }
  }
  
  module.exports = { PortfolioPage };