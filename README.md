# Djello
### A simplified Trello clone

## Installation
1. Install dependencies:
    * Backend
      ```
      cd djello/backend/
      pip install -r requirements.txt
      ```

    * Frontend
      ```
      cd djello/frontend/
      npm install
      ```  
2. Start your PostgreSQL server and create a database using the details found under `DATABASES` in `~/djello/backend/djello/settings.py` :
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'djello',
        'USER': 'ianthl',
        'PASSWORD': '',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}
```
3. Run the project:
    * Backend on http://localhost:8000
      ```
      cd djello/backend/
      python manage.py runserver 8000
      ```

    * Frontend on http://localhost:3000
      ```
      cd djello/frontend/
      npm start
      ```  
4. Open http://localhost:3000

## Testing the APIs
> 1. http://localhost:8000/api/boards/
> 2. http://localhost:8000/api/lists/
> 3. http://localhost:8000/api/cards/

## Key Features
* Uses `React DnD` for drag-and-drop / sorting of cards within a list and across lists
* Uses `Normalizr` to design a normalized state structure
* Preserves cards' order within lists using `PostgreSQL Arrays`
* Fully decoupled frontend that consumes RESTful Django API

## Technology
Djello uses:
* [Django](https://github.com/django/django)
* [Django REST framework](https://github.com/encode/django-rest-framework)
* PostgreSQL
* [React](https://github.com/facebook/react) (bootstrapped with [Create React App](https://github.com/facebook/create-react-app))
* [React-Bootstrap](https://github.com/react-bootstrap/react-bootstrap)
* [React DnD](https://github.com/react-dnd/react-dnd)
* [Redux](https://github.com/reduxjs/redux)
* [Normalizr](https://github.com/paularmstrong/normalizr)

## Known Issues
* Sorting a list of 3 or more cards may not update the database properly

## Future TODOs
* Fix known issues
* Enable edit of list and board titles (already able to edit card contents via double clicking)