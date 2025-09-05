import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AnimationController, LoadingController, ToastController } from '@ionic/angular';

interface LoginCredentials {
  empCode: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {
   credentials: LoginCredentials = {
    empCode: '',
    password: ''
  };

  showPassword = false;
  rememberMe = false;
  isLoading = false;
  logoError = false;
  empCodeError = '';
  passwordError = '';

  constructor(
    private animationCtrl: AnimationController,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.createAnimations();
  }

  createAnimations() {
    // Fade in animation for logo
    const fadeInUp = this.animationCtrl
      .create()
      .addElement(document.querySelector('.logo-section')!)
      .duration(800)
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(30px)', 'translateY(0px)');

    // Slide in animation for form
    const slideInUp = this.animationCtrl
      .create()
      .addElement(document.querySelector('.login-form')!)
      .duration(1000)
      .delay(300)
      .fromTo('opacity', '0', '1')
      .fromTo('transform', 'translateY(50px)', 'translateY(0px)');

    // Fade in animation for footer
    const fadeIn = this.animationCtrl
      .create()
      .addElement(document.querySelector('.login-footer')!)
      .duration(800)
      .delay(600)
      .fromTo('opacity', '0', '1');

    // Play animations
    fadeInUp.play();
    slideInUp.play();
    fadeIn.play();
  }

  onLogoError(event: any) {
    this.logoError = true;
    event.target.style.display = 'none';
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    
    // Add ripple effect
    this.createRippleEffect(event as MouseEvent);
  }

  validateEmpCode() {
    if (!this.credentials.empCode.trim()) {
      this.empCodeError = 'Employee code is required';
    } else if (this.credentials.empCode.length < 3) {
      this.empCodeError = 'Employee code must be at least 3 characters';
    } else {
      this.empCodeError = '';
    }
  }

  validatePassword() {
    if (!this.credentials.password.trim()) {
      this.passwordError = 'Password is required';
    } else if (this.credentials.password.length < 6) {
      this.passwordError = 'Password must be at least 6 characters';
    } else {
      this.passwordError = '';
    }
  }

  async onLogin() {
    // Validate form
    this.validateEmpCode();
    this.validatePassword();

    if (this.empCodeError || this.passwordError) {
      const toast = await this.toastCtrl.create({
        message: 'Please fix the errors above',
        duration: 3000,
        color: 'danger',
        position: 'top'
      });
      toast.present();
      return;
    }

    this.isLoading = true;

    // Create loading animation
    const loading = await this.loadingCtrl.create({
      message: 'Signing you in...',
      spinner: 'crescent',
      cssClass: 'custom-loading'
    });

    await loading.present();

    // Simulate API call
    setTimeout(async () => {
      await loading.dismiss();
      this.isLoading = false;

      // Show success animation
      await this.showSuccessAnimation();

      // Show success toast
      const toast = await this.toastCtrl.create({
        message: `Welcome back, ${this.credentials.empCode}!`,
        duration: 3000,
        color: 'success',
        position: 'top',
        buttons: [
          {
            text: 'Continue',
            role: 'cancel'
          }
        ]
      });
      toast.present();

      // Reset form if not remembering
      if (!this.rememberMe) {
        this.credentials = { empCode: '', password: '' };
      }
    }, 2000);
  }

  async showSuccessAnimation() {
    // Create success overlay
    const successDiv = document.createElement('div');
    successDiv.className = 'success-animation';
    successDiv.innerHTML = `
      <div class="success-content">
        <ion-icon name="checkmark-circle" class="success-icon"></ion-icon>
        <h2>Login Successful!</h2>
      </div>
    `;

    document.body.appendChild(successDiv);

    // Remove after animation
    setTimeout(() => {
      document.body.removeChild(successDiv);
    }, 2000);
  }

  createRippleEffect(event: MouseEvent) {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';

    button.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  
}