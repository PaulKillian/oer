import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';

export const DealerDropDown = () => {
    return (
        <div className="d-flex align-items-center">
          <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
            <Dropdown>
              <Dropdown.Toggle>
                DEALER
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item eventKey='CENTRAL'>
                  CENTRAL
                </Dropdown.Item>
                <Dropdown.Item eventKey='GROUND'>
                  GROUND
                </Dropdown.Item>
                <Dropdown.Item eventKey='LUTTYS'>
                  LUTTYS
                </Dropdown.Item>
                <Dropdown.Item eventKey='PARTSPL'>
                  PARTSPL
                </Dropdown.Item>
                <Dropdown.Item eventKey='RPI'>
                  RPI
                </Dropdown.Item>
                <Dropdown.Item eventKey='SPEEDWAY'>
                  SPEEDWAY
                </Dropdown.Item>
                <Dropdown.Item eventKey='SUMMIT'>
                  SUMMIT
                </Dropdown.Item>
                <Dropdown.Item eventKey='WINDY'>
                  WINDY
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>  
        </div> 
    )
}