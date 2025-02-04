function checkall(clickchk, relChkbox) {

    var checker = $('#' + clickchk);
    var multichk = $('.' + relChkbox);


    checker.click(function () {
        multichk.prop('checked', $(this).prop('checked'));
    });
}

function multiCheck(tb_var) {
    tb_var.on("change", ".chk-parent", function() {
        var e=$(this).closest("table").find("td:first-child .child-chk"), a=$(this).is(":checked");
        $(e).each(function() {
            a?($(this).prop("checked", !0), $(this).closest("tr").addClass("active")): ($(this).prop("checked", !1), $(this).closest("tr").removeClass("active"))
        })
    }),
    tb_var.on("change", "tbody tr .new-control", function() {
        $(this).parents("tr").toggleClass("active")
    })
}

// occupancy page script
function occupancyBtn() {
    let showCards = document.querySelectorAll(".show-card,.occupancy-card, .show-card-1");
    showCards.forEach(card => {
        if (card.style.display === "none" || card.style.display === "") {
            card.style.display = "block"; // Show all show cards
            if (card.classList.contains("show-card-1")) {
                card.style.display = "flex"; // Set flex for show-card-1
            }
        }
    });
    let mainCard = document.querySelectorAll(".main-card-items");
    mainCard.forEach(card => {
        card.classList.toggle("hidden"); // Toggle hidden class
    });
}

// back button code
function backBtn() {
    let showCards = document.querySelectorAll(".show-card, .occupancy-card, .income-card, .enquiry-card, .show-card-1,.expenses-card, .quick-card, .revenue-card");
    let mainCard = document.querySelectorAll(".main-card-items");
    showCards.forEach(card => {
        if (card.style.display === "none" || card.style.display === "") {
            if (card.classList.contains("show-card-1")) {
                card.style.display = "flex"; // Set flex for show-card-1
            }
        } else {
            card.style.display = "none"; // Hide all cards
        }
    });
    mainCard.forEach(card => {
        card.classList.toggle("hidden"); // Toggle hidden class
    });
}

// enquiryy page script
function enquiryyBtn() {
    let showCards = document.querySelectorAll(".enquiry-card,.show-card, .show-card-1");
    showCards.forEach(card => {
        if (card.style.display === "none" || card.style.display === "") {
            card.style.display = "block"; // Show all show cards
            if (card.classList.contains("show-card-1")) {
                card.style.display = "flex"; // Set flex for show-card-1
            }
        }
    });
    let mainCard = document.querySelectorAll(".main-card-items");
    mainCard.forEach(card => {
        card.classList.toggle("hidden"); // Toggle hidden class
    });
}
// income page script
function incomeBtn() {
    let showCards = document.querySelectorAll(".income-card, .show-card-1");
    showCards.forEach(card => {
        if (card.style.display === "none" || card.style.display === "") {
            card.style.display = "block"; // Show all show cards
            if (card.classList.contains("show-card-1")) {
                card.style.display = "flex"; // Set flex for show-card-1
            }
        }
    });
    let mainCard = document.querySelectorAll(".main-card-items");
    mainCard.forEach(card => {
        card.classList.toggle("hidden"); // Toggle hidden class
    });
}

// income page script
function expensesBtn() {
    let showCards = document.querySelectorAll(".expenses-card,.expenses-card, .show-card-1");
    showCards.forEach(card => {
        if (card.style.display === "none" || card.style.display === "") {
            card.style.display = "block"; // Show all show cards
            if (card.classList.contains("show-card-1")) {
                card.style.display = "flex"; // Set flex for show-card-1
            }
        }
    });
    let mainCard = document.querySelectorAll(".main-card-items");
    mainCard.forEach(card => {
        card.classList.toggle("hidden"); // Toggle hidden class
    });
}

// quickBtn page script
function quickBtn() {
    let showCards = document.querySelectorAll(".quick-card, .show-card-1");
    showCards.forEach(card => {
        if (card.style.display === "none" || card.style.display === "") {
            card.style.display = "block"; // Show all show cards
            if (card.classList.contains("show-card-1")) {
                card.style.display = "flex"; // Set flex for show-card-1
            }
        }
    });
    let mainCard = document.querySelectorAll(".main-card-items");
    mainCard.forEach(card => {
        card.classList.toggle("hidden"); // Toggle hidden class
    });
}

// backBtn1

function backBtn1() {
    let showCards = document.querySelectorAll(".show-card-2, .revenue-card, .outStanding-card, .profit-loss-card, .branch-card, .utilization-card, .maintenance-card");
    let quickCard = document.querySelectorAll(".quick-card, .show-card-1");
    showCards.forEach(card => {
        card.style.display = "none";
    });
    quickCard.forEach(card => {
        card.style.display = "flex";
    });
}

// revenue code
function revenueBtn() {
    let showCards = document.querySelectorAll(".revenue-card, .show-card-1, .show-card-2");

    showCards.forEach(card => {
        if (card.classList.contains("show-card-1")) {
            card.style.display = "none";
        } else if (card.classList.contains("show-card-2")) {
            card.style.display = "block";
            card.style.display = "flex";
        } else {
            card.style.display = "block";
        }
    });

    let quickCard = document.querySelectorAll(".quick-card");
    quickCard.forEach(card => {
        card.style.display = (card.style.display === "none" || card.style.display === "") ? "block" : "none";
    });
}

// outStanding code
function outStandingBtn() {
    let showCards = document.querySelectorAll(".outStanding-card, .show-card-1, .show-card-2");

    showCards.forEach(card => {
        if (card.classList.contains("show-card-1")) {
            card.style.display = "none";
        } else if (card.classList.contains("show-card-2")) {
            card.style.display = "block";
            card.style.display = "flex";
        } else {
            card.style.display = "block";
        }
    });

    let quickCard = document.querySelectorAll(".quick-card");
    quickCard.forEach(card => {
        card.style.display = (card.style.display === "none" || card.style.display === "") ? "block" : "none";
    });
}

// profit-loss-card code
function profitLossBtn() {
    let showCards = document.querySelectorAll(".profit-loss-card, .show-card-1, .show-card-2");

    showCards.forEach(card => {
        if (card.classList.contains("show-card-1")) {
            card.style.display = "none";
        } else if (card.classList.contains("show-card-2")) {
            card.style.display = "block";
            card.style.display = "flex";
        } else {
            card.style.display = "block";
        }
    });

    let quickCard = document.querySelectorAll(".quick-card");
    quickCard.forEach(card => {
        card.style.display = (card.style.display === "none" || card.style.display === "") ? "block" : "none";
    });
}

// branch-financials code
function branchBtn() {
    let showCards = document.querySelectorAll(".branch-card, .show-card-1, .show-card-2");

    showCards.forEach(card => {
        if (card.classList.contains("show-card-1")) {
            card.style.display = "none";
        } else if (card.classList.contains("show-card-2")) {
            card.style.display = "block";
            card.style.display = "flex";
        } else {
            card.style.display = "block";
        }
    });

    let quickCard = document.querySelectorAll(".quick-card");
    quickCard.forEach(card => {
        card.style.display = (card.style.display === "none" || card.style.display === "") ? "block" : "none";
    });
}

// utilization code
function utilizationBtn() {
    let showCards = document.querySelectorAll(".utilization-card, .show-card-1, .show-card-2");

    showCards.forEach(card => {
        if (card.classList.contains("show-card-1")) {
            card.style.display = "none";
        } else if (card.classList.contains("show-card-2")) {
            card.style.display = "block";
            card.style.display = "flex";
        } else {
            card.style.display = "block";
        }
    });

    let quickCard = document.querySelectorAll(".quick-card");
    quickCard.forEach(card => {
        card.style.display = (card.style.display === "none" || card.style.display === "") ? "block" : "none";
    });
}

// maintenance code
function maintenanceBtn() {
    let showCards = document.querySelectorAll(".maintenance-card, .show-card-1, .show-card-2");

    showCards.forEach(card => {
        if (card.classList.contains("show-card-1")) {
            card.style.display = "none";
        } else if (card.classList.contains("show-card-2")) {
            card.style.display = "block";
            card.style.display = "flex";
        } else {
            card.style.display = "block";
        }
    });

    let quickCard = document.querySelectorAll(".quick-card");
    quickCard.forEach(card => {
        card.style.display = (card.style.display === "none" || card.style.display === "") ? "block" : "none";
    });
}