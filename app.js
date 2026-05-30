// Configuration

const ROWS = 24;

const INITIAL_COLUMNS = 60;

const MAX_COLUMNS = 120;

let totalColumns = INITIAL_COLUMNS;

let gridData = [];

let arrowGroups = [];

const colors = ['#ffaa00', '#00dd00', '#ff3333', '#0088ff'];

const colorNames = ['Yellow', 'Green', 'Red', 'Blue'];



// Initialize grid

function initializeGrid() {
  
    gridData = [];
  
    for (let i = 0; i < ROWS; i++) {
      
        gridData[i] = [];
      
        for (let j = 0; j < totalColumns; j++) {
          
            gridData[i][j] = '';
          
        }
      
    }
  
    renderGrid();
  
}



// Render grid with proper layout

function renderGrid() {
  
    const container = document.getElementById('gridContainer');
  
    container.innerHTML = '';
  

  
    // Calculate grid columns: 1 for row label + totalColumns + 1 for add button
  
    const gridCols = totalColumns + 2;
  
    container.style.gridTemplateColumns = `repeat(${gridCols}, 1fr)`;
  

  
    // Header row (column numbers)
  
    const headerCell = document.createElement('div');
  
    headerCell.className = 'cell header';
  
    headerCell.textContent = 'No';
  
    container.appendChild(headerCell);
  

  
    for (let col = 0; col < totalColumns; col++) {
      
        const cell = document.createElement('div');
      
        cell.className = 'cell header';
      
        cell.textContent = col + 1;
      
        container.appendChild(cell);
      
    }
  

  
    // Add button header
  
    const addBtnHeader = document.createElement('div');
  
    addBtnHeader.className = 'cell header';
  
    addBtnHeader.textContent = '';
  
    container.appendChild(addBtnHeader);
  

  
    // Data rows
  
    for (let row = 0; row < ROWS; row++) {
      
        // Row label
      
        const rowLabel = document.createElement('div');
      
        rowLabel.className = 'cell row-label';
      
        rowLabel.textContent = row + 1;
      
        container.appendChild(rowLabel);
      

      
        // Row cells
      
        for (let col = 0; col < totalColumns; col++) {
          
            const cell = document.createElement('div');
          
            cell.className = 'cell number';
          
            cell.id = `cell-${row}-${col}`;
          
            cell.textContent = gridData[row][col];
          
            cell.onclick = () => editCell(row, col);
          
            container.appendChild(cell);
          
        }
      

      
        // Add column button for each row
      
        if (row === 0) {
          
            const addBtn = document.createElement('div');
          
            addBtn.className = 'cell add-column-btn';
          
            addBtn.textContent = '+';
          
            addBtn.onclick = addColumn;
          
            addBtn.style.gridRow = `${row + 2} / span ${ROWS}`;
          
            addBtn.style.gridColumn = `${totalColumns + 2}`;
          
            container.appendChild(addBtn);
          
        }
      
    }
  
}



// Edit cell

function editCell(row, col) {
  
    const value = prompt(`Enter value for Row ${row + 1}, Column ${col + 1}:`, gridData[row][col]);
  
    if (value !== null) {
      
        gridData[row][col] = value.trim();
      
        document.getElementById(`cell-${row}-${col}`).textContent = gridData[row][col];
      
    }
  
}



// Add column

function addColumn() {
  
    if (totalColumns < MAX_COLUMNS) {
      
        totalColumns++;
      
        for (let i = 0; i < ROWS; i++) {
          
            gridData[i].push('');
          
        }
      
        renderGrid();
      
    } else {
      
        alert('Maximum columns reached (120)');
      
    }
  
}



// Perform search

function performSearch() {
  
    const input = document.getElementById('gapInput').value.trim();
  
    clearAllGroups();
  

  
    if (!input) {
      
        document.getElementById('resultInfo').textContent = '';
      





















































































