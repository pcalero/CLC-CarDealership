/**
 * Audit model
 * 
 * @export
 * @class Audit
 * @author pedro.calero
 */
export class Audit {
  AuditID: number;
  Datetime: Date;
  CarID: String;
  Action: AuditAction;

  /**
   * Creates an instance of Audit.
   * @memberof Audit
   */
  constructor (){
  }
  
}