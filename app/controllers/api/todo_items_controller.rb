class Api::TodoItemsController < ApplicationController

    def show
        render json: TodoItem.find(params[:id])
    end

    def index
        render json: TodoItem.all
    end

    def create
        @todo = TodoItem.new(todo_params)
        if @todo.save
            render json: @todo
        else
            render json: @todo.errors.full_messsages, status: 422
        end
    end

    def update
        @todo = TodoItem.find(params[:id])
        if @todo.update
            render json: @todo
        else
            render json: @todo.errors.full_messsages, status: 422
        end
    end

    def destroy
        @todo = TodoItem.find(params[:id])
        @todo.destroy
    end
end
