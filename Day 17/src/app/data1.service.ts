import { Injectable } from '@angular/core';

export namespace contact{
@Injectable({
  providedIn: 'root'
})
export class AddNewContact{

  constructor() { }

  display1():string{
    return "new contact added";
  }
}

@Injectable({
  providedIn: 'root'
})
export class EditContact{

  constructor() { }

  display2():string{
    return "contact updated";
  }
}

@Injectable({
  providedIn: 'root'
})
export class DeleteContact{

  constructor() { }

  display3():string{
    return "contact Deleted";
  }
}

@Injectable({
  providedIn: 'root'
})
export class ListContact{

  constructor() { }

  display4():string{
    return "contact List";
  }
}
}