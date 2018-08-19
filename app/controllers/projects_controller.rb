class ProjectsController < ApplicationController
  
def index
  @projects = Project.all
end

def show
end

private

def find_project
  @project = Project.find(params[:url])
end



end
