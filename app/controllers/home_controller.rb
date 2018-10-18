class HomeController < ApplicationController
  invisible_captcha only: [:create, :update], honeypot: :subtitle

  def index
  end

  def handle_contact_request
    ActionMailer::Base.mail(from: "#{params['form-name']} <#{params['form-email']}>", to: Rails.application.credentials.contact_form_to, subject: "Neue Kontaktanfrage auf deiner Homepage", body: "#{params['form-text']}\n\nTelefon: #{params['form-phone']}").deliver
    redirect_to root_path(:anchor => 'contact'), notice: "I'll reply shortly. Here's what you wrote:\n #{params['form-text']} \n"
  end
end
