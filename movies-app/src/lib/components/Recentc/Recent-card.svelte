<div>
    <div class="recent-card">
        <div class="recent-card__progress">
            <div class="recent-card__progress-fill" />
        </div>
    </div>
    <div class="recent-card__name">
        Джентельмены
    </div>
</div>

<style>
    .recent-card {
        height: 200px;
        background: url("/images/recent-card-bg.png") no-repeat center;
        background-size: contain;
        /* Для выравнивания по низу */
        position: relative;
    }
    .recent-card__progress {
        background: rgba(255, 255, 255, 0.50);
        height: 6px;
        /* Для растягивания по левый и правый край */
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .recent-card__progress-fill {
        background: var(--primary);
        height: 6px;
        width: 50%;
    }
    .recent-card__name {
        padding-left: 20px;
        padding-top: 10px;
        padding-bottom: 10px;
        position: relative;
    }
    /* Псевдо элемент (кружочек) */
    .recent-card__name::before {
        content: '';
        display: block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: var(--primary);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
    }   
</style>