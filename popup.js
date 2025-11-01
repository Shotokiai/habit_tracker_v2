;(async () => {
  const chromeStorage = {
    get: (key) => {
      return new Promise((resolve) => {
        window.chrome.storage.local.get([key], (result) => {
          resolve(result[key])
        })
      })
    },
    set: (key, value) => {
      return new Promise((resolve) => {
        window.chrome.storage.local.set({ [key]: value }, () => {
          resolve()
        })
      })
    },
  }

  let dayRecords = (await chromeStorage.get("dayRecords")) || []
  let habitData = (await chromeStorage.get("habitData")) || { name: "", person: "" }
  let isSaved = !!habitData.name
  let isEditing = !isSaved

  const root = document.getElementById("root")

  const render = () => {
    root.innerHTML = ""

    if (!isEditing && isSaved) {
      // Display mode
      const habitDisplay = document.createElement("div")
      habitDisplay.className = "habit-display"
      habitDisplay.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div>
            <h1>${habitData.name}</h1>
            <p>Tracked by: ${habitData.person}</p>
          </div>
          <button class="btn-edit">Edit</button>
        </div>
      `
      habitDisplay.querySelector(".btn-edit").addEventListener("click", () => {
        isEditing = true
        render()
      })
      root.appendChild(habitDisplay)

      // Grid section
      const gridSection = document.createElement("div")
      gridSection.className = "grid-section"

      const gridContainer = document.createElement("div")
      gridContainer.className = "grid-container"

      const gridSize = 15
      const spacing = 16
      const dotSize = 10

      // Y-axis
      const yAxis = document.createElement("div")
      yAxis.className = "y-axis"
      for (let i = gridSize; i >= 1; i--) {
        const label = document.createElement("div")
        label.style.height = spacing + "px"
        label.style.display = "flex"
        label.style.alignItems = "center"
        label.textContent = i
        yAxis.appendChild(label)
      }
      gridContainer.appendChild(yAxis)

      // SVG
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
      svg.setAttribute("width", gridSize * spacing + 20)
      svg.setAttribute("height", gridSize * spacing + 20)
      svg.style.display = "block"

      // Draw line
      if (dayRecords.length > 0) {
        const points = dayRecords
          .map((record) => {
            const x = record.x * spacing + spacing / 2 + 10
            const y = (gridSize - record.y + 1) * spacing - spacing / 2 + 10
            return `${x},${y}`
          })
          .join(" L ")

        const polyline = document.createElementNS("http://www.w3.org/2000/svg", "polyline")
        polyline.setAttribute("points", points)
        polyline.setAttribute("fill", "none")
        polyline.setAttribute("stroke", "#4f46e5")
        polyline.setAttribute("stroke-width", "1.5")
        svg.appendChild(polyline)
      }

      // Draw dots
      for (let x = 1; x <= gridSize; x++) {
        for (let y = 1; y <= gridSize; y++) {
          const posX = x * spacing + spacing / 2 + 10
          const posY = (gridSize - y + 1) * spacing - spacing / 2 + 10
          const highlighted = dayRecords.some((record) => record.x === x && record.y === y)

          const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
          circle.setAttribute("cx", posX)
          circle.setAttribute("cy", posY)
          circle.setAttribute("r", dotSize / 2)
          circle.setAttribute("fill", highlighted ? "#4f46e5" : "#e5e7eb")
          if (highlighted) {
            circle.setAttribute("filter", "drop-shadow(0 0 4px rgba(79, 70, 229, 0.6))")
          }
          svg.appendChild(circle)
        }
      }

      gridContainer.appendChild(svg)

      // X-axis
      const xAxis = document.createElement("div")
      xAxis.className = "x-axis"
      for (let i = 1; i <= gridSize; i++) {
        const label = document.createElement("div")
        label.style.width = spacing + "px"
        label.style.textAlign = "center"
        label.textContent = i
        xAxis.appendChild(label)
      }
      gridContainer.appendChild(xAxis)

      gridSection.appendChild(gridContainer)
      root.appendChild(gridSection)

      // Action buttons
      const actionButtons = document.createElement("div")
      actionButtons.className = "action-buttons"

      const letsGoBtn = document.createElement("button")
      letsGoBtn.className = "btn-lets-go"
      letsGoBtn.textContent = "Let's Go"
      letsGoBtn.addEventListener("click", async () => {
        const lastRecord = dayRecords[dayRecords.length - 1]
        if (!lastRecord) {
          dayRecords.push({ x: 1, y: 1 })
        } else {
          const newX = lastRecord.x + 1
          const newY = lastRecord.y + 1
          if (newX <= 15 && newY <= 15) {
            dayRecords.push({ x: newX, y: newY })
          }
        }
        await chromeStorage.set("dayRecords", dayRecords)
        render()
      })
      actionButtons.appendChild(letsGoBtn)

      const missedBtn = document.createElement("button")
      missedBtn.className = "btn-missed"
      missedBtn.textContent = "Habit Missed"
      missedBtn.addEventListener("click", async () => {
        const lastRecord = dayRecords[dayRecords.length - 1]
        if (!lastRecord) {
          dayRecords.push({ x: 1, y: 0 })
        } else {
          const newX = lastRecord.x + 1
          const newY = Math.max(0, lastRecord.y - 1)
          if (newX <= 15) {
            dayRecords.push({ x: newX, y: newY })
          }
        }
        await chromeStorage.set("dayRecords", dayRecords)
        render()
      })
      actionButtons.appendChild(missedBtn)

      root.appendChild(actionButtons)

      // Reset button
      const resetBtn = document.createElement("button")
      resetBtn.className = "reset-btn"
      resetBtn.textContent = "Reset Progress"
      resetBtn.addEventListener("click", async () => {
        if (confirm("Are you sure you want to reset all progress?")) {
          dayRecords = []
          await chromeStorage.set("dayRecords", [])
          render()
        }
      })
      root.appendChild(resetBtn)
    } else {
      // Edit mode
      const headerSection = document.createElement("div")
      headerSection.className = "header-section"
      headerSection.innerHTML = `
        <h2>${isEditing ? "New Habit" : "Setup Habit"}</h2>
        <div class="input-group">
          <label>Habit Name</label>
          <input type="text" id="habitName" placeholder="e.g., Phone Habit, Exercise" value="${habitData.name}">
        </div>
        <div class="input-group">
          <label>Your Name</label>
          <input type="text" id="personName" placeholder="e.g., Vinayak" value="${habitData.person}">
        </div>
        <div class="button-group">
          <button class="btn-save" id="saveBtn">Save Habit</button>
        </div>
      `

      const habitNameInput = headerSection.querySelector("#habitName")
      const personNameInput = headerSection.querySelector("#personName")
      const saveBtn = headerSection.querySelector("#saveBtn")

      saveBtn.addEventListener("click", async () => {
        const name = habitNameInput.value.trim()
        const person = personNameInput.value.trim()
        if (name && person) {
          habitData = { name, person }
          isSaved = true
          isEditing = false
          await chromeStorage.set("habitData", habitData)
          render()
        }
      })

      root.appendChild(headerSection)
    }
  }

  render()
})()
